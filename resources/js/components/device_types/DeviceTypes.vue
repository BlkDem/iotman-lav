<template>
    <div style="margin-top: 5.5rem">
        <!-- {{ pageCaption }} -->
    </div>

    <common-card :cardCaption="pageCaption" :isCollapseButtonHidden="true">
        <AddDeviceType ref="addDeviceType"></AddDeviceType>

        <ConfirmDialogue ref="confirmDialogue" />

        <table-nav
            :compactView="compactView"
            :sortColumn="sortColumn"
            :sortRules="sortRules"
            @setCompactView="setCompactView"
            @addEvent="setDeviceType"
            @updateSortedData="updateSortedData"
            @updateFilteredData="updateFilteredData"
        ></table-nav>

        <div>
            <!-- <h5 class="text-primary my-2 align-center">{{ dataDescription }}</h5> -->
        </div>

        <div class="row my-2" v-if="!compactView">
            <div class="col-sm-4 col-xs-4 col-lg-4 p-2 fade-in" v-for="(device_type, key) in filteredDeviceTypes"
                v-bind:key="key" v-bind:id="device_type.id">
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

        <!-- compact view -->
        <div v-show="compactView" class="my-2" @click="isEditableId=0">
            <div class="card border-primary mb-1 w-100 fade-in" v-for="(device_type, key) in filteredDeviceTypes"
                v-bind:key="key" v-bind:id="device_type.id">
                <div class="mx-2 my-2">
                    <div class="row vertical-center">
                        <div class="col-sm-1 col-xs-1 col-lg-1 flex ">
                            <img v-bind:src="device_type.device_type_image" class="device-image" />
                        </div>
                        <div class="col-sm-1 col-xs-1 col-lg-1 align-left flex">
                            <span class="text-info"> {{ device_type.id }} </span>
                        </div>
                        <div class="col-sm-7 col-xs-7 col-lg-7 align-left flex"
                            @click.stop="onCellClick(device_type.id, key)">
                                <span v-if="isEditableId!==device_type.id">{{ device_type.device_type_name  }} </span>
                                <div class="flex w-100" v-if="isEditableId===device_type.id">
                                    <input class="form-control w-100"
                                        :value="device_type.device_type_name"
                                        @keyup.enter="onInputEnter(device_type.id, key, 'device_type_name', $event.target.value)"
                                        @keyup.esc="onInputEsc(key)"
                                        @change="onChange(key)"
                                    />
                                    <button class="btn btn-primary mx-1"
                                        :id="device_type.id"
                                        @click.stop="saveRecord(device_type.id, 'device_type_name', device_type.device_type_name)">
                                        <i class="far fa-check-circle fa-2x"></i>
                                    </button>
                                    <button class="btn btn-primary"
                                        @click.stop="onInputEsc(key)">
                                        <!-- <i class="far fa-window-close fa-2x"></i> -->
                                        <i class="far fa-times-circle fa-2x"></i>
                                    </button>
                                </div>
                        </div>
                        <div class="col-sm-3 col-xs-3 col-lg-3  edit-buttons">
                            <button class="btn btn-info mx-2" @click="doEditType(key, device_type.id)">
                                <i class="fas fa-edit" aria-hidden="true"></i>
                            </button>

                            <button class="btn btn-secondary" @click="doDeleteType(key, device_type.id)">
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
import AddDeviceType from './AddDeviceType.vue';
import Paginator from '../../components/common/Paginator.vue';
import MessagesConstants from '../strings_constants/strings'
import APIConstants from "../../api/rest_api";
import DeviceTypeStringConstants from '../../components/strings_constants/device_types/index';
import Sorting from "../../helpers/Sorting.js";
import Filtering from "../../helpers/Filtering.js";
import ParsingErrors from "../../helpers/ParsingErrors.js";

// import ParsingErrors from "../common/js/ParsingErrors.js";
import Imager from '../../components/common/Imager.vue';

import dsDeviceType from "../../api/dsDeviceType";

import TableNav from '../../components/common/TableBar/TableNav.vue';

    export default {

        components: {
            ConfirmDialogue,
            AddDeviceType,
            Paginator,
            Imager,
            TableNav,
            dsDeviceType
        },

        data() {
            return {
                isEditableId: 0,
                isEsc: false,
                storeValue: [],
                deviceTypes: [],
                deviceTypesVisible: false,
                compactView: true,
                pageCaption: MessagesConstants.DEVICE_TYPES ?? 'Device Types',
                filteredDeviceTypes: [], //filtered array of devices
                dataDescription: "", //table data description label
                // device_type_filter: "", //filtering string
                sortOrderStrings: [
                    MessagesConstants.SORT_ASC,
                    MessagesConstants.SORT_DESC,
                ],
                sortOrder: MessagesConstants.SORT_ASC,
                sortDirection: false,
                sortColumn: "device_type_name",
                sortRules: [{
                        key: "device_type_name",
                        title: MessagesConstants.SORT_BY_NAME
                    },
                    {
                        key: "id",
                        title: MessagesConstants.SORT_BY_ID
                    },
                ],
            };
        },

        newLang(event) {
            console.log(event)
        },

        created() {
            this.page_description = DeviceTypeStringConstants.DEVICE_TYPE_PAGE_DESCRIPTION;

            if (localStorage.DeviceTypeCompactView == null) {
                localStorage.DeviceTypeCompactView = this.compactView;
            }
            this.dataDescription = DeviceTypeStringConstants.DEVICE_TYPE_DATA_DESCRIPTION; //device dataset description

            this.getData();
        },

        mounted() {
            if (localStorage.getItem('CompactView')) {
                this.compactView = (localStorage.getItem('CompactView') === 'true');
            }

            this.emitter.on("new-lang", _lang => {
                this.setLang(_lang)
            });

            dsDeviceType.getItems()
        },

        computed: {
            SortName() {
                return MessagesConstants.SortingCaption(this.sortColumn, this.sortDirection)
            },
        },


        methods: {

            onChange($key){
                if (this.isEsc === true) {
                    this.isEsc = false
                    return
                }
                this.filteredDeviceTypes[$key].device_type_name = this.storeValue[$key]
            },

            onInputEnter($id, $key, $field, $value){
                this.filteredDeviceTypes[$key].device_type_name = $value
                this.saveRecord($id, $field, $value)
            },

            onInputEsc($key){
                this.isEsc = true
                // this.storeValue[$key] = this.filteredDeviceTypes[$key].device_type_name
                 console.log(
                    'on esc',
                 this.filteredDeviceTypes[$key].device_type_name,
                 this.deviceTypes[$key].device_type_name,
                 this.storeValue[$key])

                // this.filteredDeviceTypes[$key].device_type_name = this.storeValue[$key]
                this.isEditableId = 0
            },

            saveRecord($id, $field, $value) {
                console.log('saving: ', $field, $value)
                this.isEditableId = 0

                axios.patch(
                    APIConstants.api_device_type_patch + $id + '/' + $field + '/' + $value)
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

            onCellClick($id, $key) {
                this.isEditableId = $id
                this.storeValue[$key] = this.deviceTypes[$key].device_type_name
                console.log($id, $key, this.storeValue[$key])
            },

            setLang(_lang) {
                this.pageCaption = _lang.DEVICE_TYPES ?? 'Device Types'
            },

            openImager() {
                this.$refs.imager.createImager()
            },

            updateSortedData($column, $direction) {
                this.sortDirection = $direction
                this.sortColumn = $column
                Sorting.doSort(this.filteredDeviceTypes, this.sortColumn, this.sortDirection)
            },

            updateFilteredData($filter) {
                this.filteredDeviceTypes = this.deviceTypes;
                this.filteredDeviceTypes = Filtering.doFilter(this.filteredDeviceTypes, this.sortColumn, $filter)
            },

            setCompactView(value) {
                console.log(value)
                this.compactView = Boolean(value)
            },

            async getData(_currentPage=1, _itemsPerPage=5) {
                await axios.get(APIConstants.api_devices_types_read_page + _currentPage + "/" + _itemsPerPage)
                    // .then(response => response.json())
                    .then(response => {
                        // console.log(response.status)
                        this.deviceTypes = response.data.data;
                        this.filteredDeviceTypes = this.deviceTypes;

                        this.$refs.paginatorDeviceTypes.setPaginator(
                            {
                                pagesCount:   response.data.paginator.PagesCount,
                                currentPage:  response.data.paginator.CurrentPage,
                                itemsPerPage: response.data.paginator.ItemsPerPage,
                                recordsCount: response.data.paginator.RecordsCount
                            }
                        )

                        this.deviceTypes = this.filteredDeviceTypes;
                        this.updateSortedData(this.sortColumn, this.$direction);
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

            async setDeviceType() {
                const _add = await this.$refs.addDeviceType.showDialogue({
                    edit_mode: false,
                    title: DeviceTypeStringConstants.DEVICE_TYPE_ADDING_TITLE,
                    message: DeviceTypeStringConstants.DEVICE_TYPE_ADDING_MESSAGE,
                    device_type_name: "",
                    device_type_desc: "",
                    device_type_image: "",
                    okButton: DeviceTypeStringConstants.DEVICE_TYPE_ADDBUTTON_CAPTION,
                })

                if (_add) {
                    const deviceType = this.$refs.addDeviceType
                    axios.post(APIConstants.api_device_type_create, {
                                device_type_name:  deviceType.device_type_name,
                                device_type_image: deviceType.device_type_image,
                                device_type_desc:  deviceType.device_type_desc
                            }
                        )
                        .then(resp => {
                            // console.log(resp['data']);
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
