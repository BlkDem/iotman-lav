<template @keyup.esc="resetEditCell()">
    <div style="margin-top: 0.5rem">
        <!-- {{ pageCaption }} -->
    </div>

    <common-card :cardCaption="pageCaption" :isCollapseButtonHidden="false">
        <AddItem ref="addItem"></AddItem>

        <ConfirmDialogue ref="confirmDialogue" />

        <table-nav
            :compactView="compactView"
            :dataFields="dataFields"
            @getData="getData"
            @setCompactView="setCompactView"
            @addEvent="setItem"
            @updateSortedData="updateSortedData"
            @updateFilteredData="updateFilteredData"
        >
        </table-nav>

        <div>
            <!-- <h5 class="text-primary my-2 align-center">{{ dataDescription }}</h5> -->
        </div>

        <div class="row my-2" v-if="!compactView">
            <div class="col-sm-4 col-xs-4 col-lg-4 p-2 fade-in" v-for="(item, key) in filteredItems"
                v-bind:key="key" v-bind:id="item.id.value">
                <div class="card border-light flex py-2">
                    <!-- <h3 class="card-header">
                        {{ item.id.key }}
                        <span class="text-info">({{ item.id.value }})</span>
                    </h3> -->
                    <!-- <div class="card-body">
                        <h6 class="card-subtitle text-muted">
                            {{ device_type.device_type_desc }}
                        </h6>
                    </div> -->

                    <!-- <img v-bind:src="device_type.device_type_image" /> -->
                    <div class="w-100 flex-center" v-for="(column, ckey) in Object.keys(item)"
                        v-bind:key="ckey">

                        <span v-if="(activeCol!==key||activeRow!==ckey)&&(item[column].isImage != true)"
                            :class="{'text-info': item[column].isHighLight}"
                        >
                            {{ item[column].value }}
                        </span>

                        <!-- <img v-if="item[column].isImage" class="w-100 p-2"
                            :src="'/storage/images/'+ item[column].value?
                                '/storage/images/'+ item[column].value :
                                '/storage/images/blog.jpg'"
                        /> -->
                        <img v-if="item[column].isImage" class="w-100 p-2"
                            :src="(!item[column].isVirtualImage)?imagesPath + item[column].value:imagesPath +'blog.jpg'"
                            @error="replaceByDefault"
                        />
                        <div class="flex w-100" v-if="activeCol===key&&activeRow===ckey">

                        </div>
                    </div>


                    <div class="card-body w-100">
                        <div class="flex-center">
                        <button class="btn btn-info btn-width-40 mx-1" @click="doEdit(key, item.id.value)">
                            <i class="fas fa-edit" aria-hidden="true"></i>
                            Edit
                        </button>

                        <button class="btn btn-warning btn-width-40 mx-1" @click="doDelete(key, item.id.value)">
                            <i class="fa fa-trash" aria-hidden="true"></i>
                            Delete
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- compact view -->
        <div v-show="compactView" class="my-2" >
            <div class="card border-primary mb-1 w-100 fade-in" v-for="(item, key) in filteredItems" v-bind:key="key"
                v-bind:id="item.id.value">
                <div class="mx-2 my-2">
                    <div class="row vertical-center">

                        <div :class="item[column].class" class="flex"

                            v-for="(column, ckey) in Object.keys(item)" v-bind:key="ckey"
                        >

                            <span v-if="(activeCol!==key||activeRow!==ckey)&&(item[column].isImage != true)" class="w-75"
                                :class="{'text-info': item[column].isHighLight}"
                                @click.stop="onCellClick(item[column].isEditable, ckey, key)"
                            >
                                {{ item[column].value }}
                            </span>
                            <img v-if="item[column].isImage" class="device-image"
                                :src="(!item[column].isVirtualImage)?imagesPath + item[column].value:imagesPath +'blog.jpg'"
                                @error="replaceByDefault"
                            />
                            <div class="flex w-100" v-if="activeCol===key&&activeRow===ckey"

                            >
                                <input class="form-control w-100" :value="item[column].value" :id="setId(key, ckey)" :name="setId(key, ckey)"
                                    @keyup.enter="onInputEnter()"
                                    @keyup.esc="onInputEsc()"
                                    @change="onInputChange(item.id.value, key, column, $event.target.value, isEsc)"
                                />
                                <button class="btn btn-primary mx-1" :id="item.id.value"
                                    @click.stop="saveRecord(item.id.value, item[column].value, item[column].value, $event.target.value)">
                                    <i class="far fa-check-circle"></i>
                                </button>
                                <button class="btn btn-primary" @mousedown="this.isEsc=true; this.resetEditCell()">
                                    <!-- <i class="far fa-window-close fa-2x"></i> -->
                                    <i class="far fa-times-circle"></i>
                                </button>
                            </div>
                        </div>

                        <div class="col-sm-3 col-xs-3 col-lg-3  edit-buttons ">
                            <button class="btn btn-info mx-2" @click="doEdit(key, item.id.value)">
                                <i class="fas fa-edit" aria-hidden="true"></i>
                            </button>

                            <button class="btn btn-secondary" @click="doDelete(key, item.id.value)">
                                <i class="fa fa-trash" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Paginator ref="paginatorDeviceTypes"></Paginator>
        <!-- <MyMqtt></MyMqtt> -->
    </common-card>

</template>

<script>
import ConfirmDialogue from '../../components/common/ConfirmDialogue.vue';
// import AddDeviceType from './AddDeviceType.vue';
import Paginator from '../../components/common/Paginator.vue';
import MessagesConstants from '../strings_constants/strings'
import APIConstants from "../../api/rest_api";
import Pathes from "../../config/pathes";
import Sorting from "../../helpers/Sorting";
import Filtering from "../../helpers/Filtering.js";
import ParsingErrors from "../../helpers/ParsingErrors.js";
import AddItem from './AddDialog.vue';

// import DataField from '../../classes/DataField.ts';

import TableNav from '../../components/common/TableBar/TableNav.vue';

    export default {

        props: {
            api: {
                type: Object
            },

            pageCaption: {
                type: String
            },

            dataFields: {
                type: Array
            },

            foreignKey: {
                type: String,
                default: ''
            },

            foreignValue: {
                type: Number,
                default: 0
            },
        },


        components: {
            ConfirmDialogue,
            Paginator,
            AddItem,
            TableNav,
        },

        data() {
            return {
                // isEditableId: [],
                activeCol: undefined,
                activeRow: undefined,

                isEsc: false,

                Items: [],
                filteredItems: [], //filtered array of devices

                itemsVisible: false,
                compactView: true,

                imagesPath: ''

            };
        },

        created() {
            this.getData();
            this.imagesPath = Pathes.storageImagesPath;

        },

        mounted() {
            if (localStorage.getItem('CompactView')) {
                this.compactView = (localStorage.getItem('CompactView') === 'true');
            }

            this.emitter.on("new-lang", _lang => {
                this.setLang(_lang)
            });

            // console.log(this.imagesPath)

            // dsDeviceType.getItems()
        },

        methods: {

            replaceByDefault(e) {
                e.target.src = Pathes.storageImagePlug
            },

            setId($key, $ckey) {
                return "id" + $key + "_" + $ckey
            },

            resetEditCell() {
                this.activeCol = undefined
                this.activeRow = undefined
            },

            onInputChange($item, $key, $dataCol, $value, $isEsc){
                if ($isEsc) {
                    this.isEsc = false
                    return
                }
                console.log('change', $item, $dataCol, $value)

                this.filteredItems[$key][$dataCol].value = $value
                this.Items[$key][$dataCol].value = $value

                this.saveRecord($item, $dataCol, $value)
            },

            //saving cell data if changed
            onInputEnter(){
                this.resetEditCell()
            },

            //cancel editing cell data
            onInputEsc(){
                this.isEsc = true
                this.resetEditCell()
            },

            //save cell data to db
            saveRecord($id, $field, $value) {
                this.resetEditCell()
                axios.patch(
                    this.api.patch + $id + '/' + $field + '/' + $value)
                    .then(resp => {
                        this.$root.$refs.toaster.showMessage(
                            MessagesConstants.EDITED_MESSAGE,
                            MessagesConstants.PROCESS_SUCCESSFULLY
                        );
                    })
            },

            onCellClick($isEditable, $ckey=undefined, $key=undefined) {
                if (!$isEditable) return //check editable cell
                this.activeCol = $key //set active column
                this.activeRow = $ckey //set active row
                const a = setTimeout(() => { //delay for set focus to active input
                    $("input#id" + $key + "_" + $ckey).focus()
                }, 200)
            },

            setLang(_lang) {
                // this.pageCaption = _lang.DEVICE_TYPES ?? 'Device Types'
            },

            updateSortedData($column, $direction) {
                Sorting.doSort(this.filteredItems, $column, $direction)
            },

            updateFilteredData($filter) {

                this.filteredItems = this.Items;
                this.filteredItems = Filtering.doFilter(this.filteredItems, this.filterColumn, $filter)
            },

            setCompactView(value) {
                // console.log(value)
                this.compactView = Boolean(value)
            },

            async getData(_currentPage=1, _itemsPerPage=5) {
                await axios.get(this.api.get + _currentPage + "/" + _itemsPerPage)
                    .then(response => {
                        this.Items = response.data.data;

                        // prepare items to fields transform/extend
                        let newList = this.Items.map(item => ({
                            _id: item.id,
                        }));

                        // transform fields to objects with extended properties
                        for (let itemRow=0; itemRow<newList.length; itemRow++) {

                            // enum fields from dataFields list and add custom properties
                            for (let field=0; field<this.dataFields.length; field++) {

                                const dataField = this.dataFields[field]

                                const _editable = dataField.isEditable //possible to edit cell by text click
                                const _sortable = dataField.isSortable //field can sorted
                                const _image = dataField.isImage //image field - binding 'img'
                                const _highlight = dataField.isHighLight //highlight another color field 'bg-info' class
                                const _colscount = dataField.columnsCount //col-* col-ls-* ... value
                                const _virtual = dataField?.isVirtualImage //for abstract images like 'albums'

                                newList[itemRow][dataField.fieldName] = {
                                    value: this.Items[itemRow][dataField.fieldName],
                                    isEditable: _editable,
                                    isSortable: _sortable,
                                    isImage: _image,
                                    isHighLight: _highlight,
                                    columnsCount: _colscount,
                                    isVirtualImage: _virtual,
                                    class: //field width (bootstarp)
                                        (_colscount===1)?
                                        "col-sm-" + _colscount +
                                        " col-xs-" + _colscount +
                                        " col-lg-" + _colscount + " align-center"
                                        :
                                        "col-sm-" + _colscount +
                                        " col-xs-" + _colscount +
                                        " col-lg-" + _colscount
                                }
                            }
                        }

                        this.Items = newList;
                        this.filteredItems = this.Items;

                        // setup paginator
                        this.$refs.paginatorDeviceTypes.setPaginator(
                            {
                                pagesCount: response.data.paginator.PagesCount,
                                currentPage: response.data.paginator.CurrentPage,
                                itemsPerPage: response.data.paginator.ItemsPerPage,
                                recordsCount: response.data.paginator.RecordsCount
                            }
                        )
                    })
                    .catch(err => {
                        console.log('error: ', err.response.status)
                        if (err.response?.status === 401) {
                            window.location.href = "/login"
                        }
                    });
            },

            async doDelete(key, id) {

                const confirmDelete = await this.$refs.confirmDialogue.showDialogue({
                    title: MessagesConstants.DELETE_CAPTION,
                    message: MessagesConstants.DELETE_CONFORMATION,
                    okButton: MessagesConstants.DELETE_BUTTON,
                })

                if (confirmDelete) {
                    axios.delete(APIConstants.api_device_type_delete + id)
                        .then(resp => {
                            this.Items.splice(key, 1);
                            this.Items = this.filteredItems
                            this.$root.$refs.toaster.showMessage(
                                MessagesConstants.DELETED_MESSAGE,
                                MessagesConstants.PROCESS_SUCCESSFULLY
                            )
                        })
                        .catch(error => {
                            console.log(error);
                        })
                } else {
                    console.log(MessagesConstants.DELETING_CANCELLED)
                }
            },

            async setItem() {
                const _add = await this.$refs.addItem.showDialogue({
                    edit_mode: false,
                    title: MessagesConstants.ITEM_ADDING_TITLE,
                    message: MessagesConstants.ITEM_ADDING_MESSAGE,
                    okButton: MessagesConstants.ITEM_ADDBUTTON_CAPTION,
                    dataFields: this.dataFields
                })

                if (_add) {
                    const newItem = this.$refs.addItem.postData
                    axios.post(APIConstants.api_device_type_create, newItem
                        )
                        .then(resp => {
                            console.log(resp['data']);
                            let newDevice = {
                                device_type_name: resp['data'].device_type_name,
                                device_type_desc: resp['data'].device_type_desc,
                                device_type_image: resp['data'].device_type_image,
                                id: resp['data'].id
                            }
                            this.deviceTypes.push(newDevice);
                            this.$root.$refs.toaster.showMessage(
                                MessagesConstants.ADDED_MESSAGE,
                                MessagesConstants.PROCESS_SUCCESSFULLY
                            )
                        })
                        .catch(error => {
                            //
                            //const Toaster = app.component('toaster')
                            this.$root.$refs.toaster.showMessage(
                                MessagesConstants.INSERTING_ERROR,
                                ParsingErrors.getError(error),
                                ParsingErrors.ERROR_LEVEL_ERROR
                            )
                        })
                } else {
                    console.log(MessagesConstants.INSERTING_CANCELLED);
                }

            },


            async doEditType(key, id) {
                const _edit = await this.$refs.addDeviceType.showDialogue(
                    {
                        edit_mode: true,
                        title: DeviceTypeStringConstants.DEVICE_TYPE_EDITING_TITLE,
                        message: DeviceTypeStringConstants.DEVICE_TYPE_EDITING_MESSAGE,
                        device_type_name: this.deviceTypes[key].device_type_name,
                        device_type_desc: this.deviceTypes[key].device_type_desc,
                        device_type_image: this.deviceTypes[key].device_type_image,
                        okButton: DeviceTypeStringConstants.DEVICE_TYPE_EDITBUTTON_CAPTION,
                    }
                )

                if (_edit) {
                    let editDeviceTypePost = {
                        device_type_name: this.$refs.addDeviceType.device_type_name,
                        device_type_image: this.$refs.addDeviceType.device_type_image,
                        device_type_desc: this.$refs.addDeviceType.device_type_desc
                    }
                    //console.log(editDeviceTypePost);

                    axios.put(APIConstants.api_device_type_update + id, editDeviceTypePost)
                        .then(resp => {
                            // console.log(resp['data']);
                            this.deviceTypes[key].device_type_name = resp['data'].device_type_name;
                            this.deviceTypes[key].device_type_desc = resp['data'].device_type_desc;
                            this.deviceTypes[key].device_type_image = resp['data'].device_type_image;
                            this.$root.$refs.toaster.showMessage(
                                MessagesConstants.EDITED_MESSAGE,
                                MessagesConstants.PROCESS_SUCCESSFULLY
                            );
                        })
                        .then(resp => {
                            // this.$root.$refs.DeviceRef.getData();
                        })
                        .catch(error => {
                            this.$root.$refs.toaster.showMessage(
                                MessagesConstants.EDITING_ERROR,
                                ParsingErrors.getError(error),
                                ParsingErrors.ERROR_LEVEL_ERROR
                            )
                        })
                } else {
                    console.log(MessagesConstants.EDITING_CANCELLED);
                }

            },

        },

    };
</script>

<style>


</style>