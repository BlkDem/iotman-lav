<template @keyup.esc="resetEditCell()">
    <div style="margin-top: 0.5rem">
        <!-- {{ pageCaption }} -->
    </div>

    <common-card :cardCaption="pageCaption" :isCollapseButtonHidden="false">
        <!-- <AddDeviceType ref="addDeviceType"></AddDeviceType> -->

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

        <!-- <div class="row my-2" v-if="!compactView">
            <div class="col-sm-4 col-xs-4 col-lg-4 p-2 fade-in" v-for="(item, key) in filteredItems"
                v-bind:key="key" v-bind:id="item.id">
                <div class="card border-light align-center">
                    <h3 class="card-header">
                        {{ device_type.device_type_name }}
                        <span class="text-info">({{ device_type.id }})</span>
                    </h3>
                    <div class="card-body">
                        <h6 class="card-subtitle text-muted">
                            {{ device_type.device_type_desc }}
                        </h6>
                    </div>
                    <img v-bind:src="device_type.device_type_image" />
                    <div class="card-body">
                        <button class="btn btn-info btn-width-40 mx-1" @click="doEditType(key, device_type.id)">
                            <i class="fas fa-edit" aria-hidden="true"></i>
                            Edit
                        </button>

                        <button class="btn btn-warning btn-width-40 mx-1" @click="doDeleteType(key, device_type.id)">
                            <i class="fa fa-trash" aria-hidden="true"></i>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
 -->
        <!-- compact view -->
        <div v-show="compactView" class="my-2" >
            <div class="card border-primary mb-1 w-100 fade-in" v-for="(item, key) in filteredItems" v-bind:key="key"
                v-bind:id="item.id.value">
                <div class="mx-2 my-2">
                    <div class="row vertical-center">

                        <div :class="item[column].class" class="flex"

                            v-for="(column, ckey) in Object.keys(item)" v-bind:key="ckey"
                        >

                            <span v-if="(activeCol!==key||activeRow!==ckey)&&(item[column].isImage != true)"
                                :class="{'text-info': item[column].isHighLight}"
                                @click.stop="onCellClick(item[column].isEditable, ckey, key)"
                            >
                                {{ item[column].value }}
                            </span>
                            <img v-if="item[column].isImage" :src="'/storage/images/'+item[column].value" class="device-image"/>
                            <div class="flex w-100" v-if="activeCol===key&&activeRow===ckey"

                            >
                                <input class="form-control w-100" :value="item[column].value" :id="setId(key, ckey)" :name="setId(key, ckey)"
                                    @click="inputClick($event)"
                                    @keyup.enter="onInputEnter(item.id.value, key, column, $event.target.value)"
                                    @keyup.esc="onInputEsc(key)"
                                    @change="onChange(item.id.value, key, column, $event.target.value, isEsc)"
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
                            <button class="btn btn-info mx-2" @click="doEditType(key, item.id)">
                                <i class="fas fa-edit" aria-hidden="true"></i>
                            </button>

                            <button class="btn btn-secondary" @click="doDeleteType(key, item.id)">
                                <i class="fa fa-trash" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Paginator ref="paginatorDeviceTypes"></Paginator>
        <Imager ref="imager" />
        <!-- <MyMqtt></MyMqtt> -->
    </common-card>

</template>

<script>
import ConfirmDialogue from '../../components/common/ConfirmDialogue.vue';
// import AddDeviceType from './AddDeviceType.vue';
import Paginator from '../../components/common/Paginator.vue';
import MessagesConstants from '../strings_constants/strings'
import APIConstants from "../../api/rest_api";
// import DeviceTypeStringConstants from '../../components/strings_constants/device_types/index';
import Sorting from "../../helpers/Sorting";
import Filtering from "../../helpers/Filtering.js";
import ParsingErrors from "../../helpers/ParsingErrors.js";

// import ParsingErrors from "../common/js/ParsingErrors.js";
import Imager from '../../components/common/Imager.vue';

// import dsDeviceType from "../../api/dsDeviceType";

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
                type: String
            },

            foreignValue: {
                type: Number
            },
        },


        components: {
            ConfirmDialogue,
            // AddDeviceType,
            Paginator,
            Imager,
            TableNav,
            // dsDeviceType
        },

        data() {
            return {
                isEditableId: [],
                activeCol: undefined,
                activeRow: undefined,
                isEsc: false,
                storeValue: [], //??
                Items: [],
                filteredItems: [], //filtered array of devices

                itemsVisible: false,
                compactView: true,

                // dataDescription: "", //table data description label

                // sortOrderStrings: [
                //     MessagesConstants.SORT_ASC,
                //     MessagesConstants.SORT_DESC,
                // ],
                // sortOrder: MessagesConstants.SORT_ASC,
                // sortDirection: false,
                // sortColumn: this.dataFields[0].fieldName, // to props
                // filterColumn: 'image_desc',
                // sortRules: [
                //     // {
                //     //     key: 'name',
                //     //     title: MessagesConstants.SORT_BY_NAME
                //     // },
                //     // {
                //     //     key: "id",
                //     //     title: MessagesConstants.SORT_BY_ID
                //     // },
                // ],
            };
        },

        created() {
            this.getData();
        },

        mounted() {
            if (localStorage.getItem('CompactView')) {
                this.compactView = (localStorage.getItem('CompactView') === 'true');
            }

            this.emitter.on("new-lang", _lang => {
                this.setLang(_lang)
            });


            // dsDeviceType.getItems()
        },

        methods: {

            // isColumnValid(_column) {
            //     // console.log(_column)
            //     for (let i=0; i<this.dataFields.length; i++) {
            //         // console.log(this.dataFields[i].fieldName)
            //         if (this.dataFields[i].fieldName === _column) return true
            //     }
            //     return false
            // },

            setId($key, $ckey) {
                return "id" + $key + "_" + $ckey
            },

            resetEditCell() {
                this.activeCol = undefined
                this.activeRow = undefined
            },

            onChange($item, $key, $dataCol, $value, $isEsc){
                if ($isEsc) {
                    this.isEsc = false
                    return
                }
                console.log('change', $item, $dataCol, $value)

                this.filteredItems[$key][$dataCol].value = $value
                this.Items[$key][$dataCol].value = $value

                this.saveRecord($item, $dataCol, $value)
                // console.log(this.filteredItems[$key], $key, $id, $column, $columnName, $value)
                //this.filteredItems[$key].fieldName = this.storeValue[$key]
            },

            inputClick($e) {
                // console.log($e)
            },

            onInputEnter(){
                this.resetEditCell()
            },

            onInputEsc(){
                // console.log('esc: ', this.isEsc)
                this.isEsc = true
                this.resetEditCell()
            },

            saveRecord($id, $field, $value) {
                // console.log('saving: ', $field, $value)

                // this.isEditableId = 0
                this.resetEditCell()
                axios.patch(
                    this.api.patch + $id + '/' + $field + '/' + $value)
                        .then(resp => {
                            this.$root.$refs.toaster.showMessage(
                                MessagesConstants.EDITED_MESSAGE,
                                MessagesConstants.PROCESS_SUCCESSFULLY
                            );
                        })
                        .then(resp => {
                            // this.$root.$refs.DeviceRef.getData();
                        })


            },

            onCellClick($isEditable, $ckey=undefined, $key=undefined) {
                // this.isEditableId[$key] = $id
                if (!$isEditable) return
                this.activeCol = $key
                this.activeRow = $ckey
                const a = setTimeout(() => {
                    console.log('to')
                    $("input#id" + $key + "_" + $ckey).focus()
                }, 200)

                // console.log("#id" + $key + "_" + $ckey)
                //document.getElementsByName("#id" + $key + "_" + $ckey)[0].focus();
                // this.storeValue[$ckey] = this.Items[$ckey].fieldName
                // console.log($isEditable, $ckey, $key)
            },

            setLang(_lang) {
                // this.pageCaption = _lang.DEVICE_TYPES ?? 'Device Types'
            },

            updateSortedData($column, $direction) {
                // this.sortDirection = $direction
                // this.sortColumn = $column
                console.log('update sort in datatable', $column, $direction)
                Sorting.doSort(this.filteredItems, $column, $direction)
            },

            updateFilteredData($filter) {

                this.filteredItems = this.Items;
                this.filteredItems = Filtering.doFilter(this.filteredItems, this.filterColumn, $filter)
            },

            setCompactView(value) {
                console.log(value)
                this.compactView = Boolean(value)
            },

            async getData(_currentPage=1, _itemsPerPage=5) {
                await axios.get(this.api.get + _currentPage + "/" + _itemsPerPage)
                    .then(response => {
                        this.Items = response.data.data;

                        let newList = this.Items.map(item => ({
                            old_id: item.id,
                        }));

                        for (let itemRow=0; itemRow<newList.length; itemRow++) {
                            for (let field=0; field<this.dataFields.length; field++) {
                                let _editable = this.dataFields[field].isEditable
                                let _sortable = this.dataFields[field].isSortable
                                let _image = this.dataFields[field].isImage
                                let _highlight = this.dataFields[field].isHighLight
                                let _colscount = this.dataFields[field].columnsCount
                                newList[itemRow][this.dataFields[field].fieldName] = {
                                    'value': this.Items[itemRow][this.dataFields[field].fieldName],
                                    'isEditable': _editable,
                                    'isSortable': _sortable,
                                    'isImage': _image,
                                    'isHighLight': _highlight,
                                    'columnsCount': _colscount,
                                    'class':
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

                        //console.log(newList)

                        this.Items = newList;
                        this.filteredItems = this.Items;


                        this.$refs.paginatorDeviceTypes.setPaginator(
                            {
                                pagesCount: response.data.paginator.PagesCount,
                                currentPage: response.data.paginator.CurrentPage,
                                itemsPerPage: response.data.paginator.ItemsPerPage,
                                recordsCount: response.data.paginator.RecordsCount
                            }
                        )

                        // this.Items = this.filteredItems;
                        this.updateSortedData(this.sortColumn, this.$direction);
                        // }
                        // console.log(_a.keys.)

                    })
                    .catch(err => {
                        console.log('error: ', err.response.status)
                        if (err.response.status === 401) {
                            window.location.href = "/login"
                        }
                    });
            },

            async doDeleteType(key, id) {

                const confirmDelete = await this.$refs.confirmDialogue.showDialogue({
                    title: DeviceTypeStringConstants.DEVICE_TYPE_DELETING_CAPTION,
                    message: DeviceTypeStringConstants.DEVICE_TYPE_DELETING_MESSAGE + '"' +
                    this.filteredDeviceTypes[key].device_type_name + '"?',
                    okButton: DeviceTypeStringConstants.DEVICE_TYPE_DELETING_CAPTION,
                })

                if (confirmDelete) {
                    axios.delete(APIConstants.api_device_type_delete + id)
                        .then(resp => {
                            this.filteredDeviceTypes.splice(key, 1);
                            this.deviceTypes = this.filteredDeviceTypes
                            // console.log(key, id, " - deleted");
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
            setItem() {
                return
            },
            // async setItem() {
            //     const _add = await this.$refs.addDeviceType.showDialogue({
            //         edit_mode: false,
            //         title: DeviceTypeStringConstants.DEVICE_TYPE_ADDING_TITLE,
            //         message: DeviceTypeStringConstants.DEVICE_TYPE_ADDING_MESSAGE,
            //         device_type_name: "",
            //         device_type_desc: "",
            //         device_type_image: "",
            //         okButton: DeviceTypeStringConstants.DEVICE_TYPE_ADDBUTTON_CAPTION,
            //     })

            //     if (_add) {
            //         const deviceType = this.$refs.addDeviceType
            //         axios.post(APIConstants.api_device_type_create, {
            //                     device_type_name:  deviceType.device_type_name,
            //                     device_type_image: deviceType.device_type_image,
            //                     device_type_desc:  deviceType.device_type_desc
            //                 }
            //             )
            //             .then(resp => {
            //                 // console.log(resp['data']);
            //                 let newDevice = {
            //                     device_type_name: resp['data'].device_type_name,
            //                     device_type_desc: resp['data'].device_type_desc,
            //                     device_type_image: resp['data'].device_type_image,
            //                     id: resp['data'].id
            //                 }
            //                 this.deviceTypes.push(newDevice);
            //                 this.$root.$refs.toaster.showMessage(
            //                     MessagesConstants.ADDED_MESSAGE,
            //                     MessagesConstants.PROCESS_SUCCESSFULLY
            //                 )
            //             })
            //             .catch(error => {
            //                 //
            //                 //const Toaster = app.component('toaster')
            //                 this.$root.$refs.toaster.showMessage(
            //                     MessagesConstants.INSERTING_ERROR,
            //                     ParsingErrors.getError(error),
            //                     ParsingErrors.ERROR_LEVEL_ERROR
            //                 )
            //             })
            //     } else {
            //         console.log(MessagesConstants.INSERTING_CANCELLED);
            //     }

            // },
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
