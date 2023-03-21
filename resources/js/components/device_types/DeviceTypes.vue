<template>
    <div style="margin-top: 5.5rem">
        <!-- {{ pageCaption }} -->
    </div>

    <data-table
            :api="deviceTypes.api"
            :dataFields="deviceTypes.deviceTypesFields"
            :pageCaption="deviceTypes.deviceTypesCaption"
        >
    </data-table>

</template>

<script>
// import ConfirmDialogue from '../../components/common/ConfirmDialogue.vue';
// import AddDeviceType from './AddDeviceType.vue';
// import Paginator from '../../components/common/Paginator.vue';
import MessagesConstants from '../strings_constants/strings'
import APIConstants from "../../api/rest_api";
import DeviceTypeStringConstants from '../../components/strings_constants/device_types/index';
import Sorting from "../../helpers/Sorting.js";
import Filtering from "../../helpers/Filtering.js";
import ParsingErrors from "../../helpers/ParsingErrors.js";
import DataTable from '../db/DataTable.vue';

// import ParsingErrors from "../common/js/ParsingErrors.js";
// import Imager from '../../components/common/Imager.vue';

// import dsDeviceType from "../../api/dsDeviceType";

// import TableNav from '../../components/common/TableBar/TableNav.vue';

    export default {

        components: {
            // ConfirmDialogue,
            // AddDeviceType,
            // Paginator,
            DataTable
            // Imager,
            // TableNav,
            // dsDeviceType
        },

        data() {
            return {
                deviceTypes: {
                    deviceTypesCaption: MessagesConstants.DEVICE_TYPES,

                    api: {
                        get: '',
                        insert: '',
                        update: '',
                        delete: '',
                        patch: ''
                    },

                    deviceTypesFields: [
                        {
                            fieldName: 'device_type_image',
                            fieldCaption: 'Image',
                            type: String,
                            isImage: true,
                            isEditable: true,
                            isSortable: true,
                            isHighLight: false,
                            columnsCount: 1
                        },

                        {
                            fieldName: 'id',
                            fieldCaption: 'ID',
                            type: Number,
                            isImage: false,
                            isEditable: false,
                            isSortable: true,
                            isHighLight: true,
                            columnsCount: 1
                        },

                        {
                            fieldName: 'device_type_name',
                            fieldCaption: 'Name',
                            type: String,
                            isImage: false,
                            isEditable: true,
                            isSortable: true,
                            isHighLight: false,
                            columnsCount: 3
                        },

                        {
                            fieldName: 'device_type_desc',
                            fieldCaption: 'Description',
                            type: String,
                            isImage: false,
                            isText: true,
                            isEditable: true,
                            isSortable: true,
                            isHighLight: false,
                            columnsCount: 4
                        },
                    ],

                },

            }
        },

        newLang(event) {
            console.log(event)
        },

        created() {

            const deviceTypeApi = this.deviceTypes

            deviceTypeApi.api.get =    APIConstants.api_devices_types_read_page
            deviceTypeApi.api.insert = APIConstants.api_device_type_create
            deviceTypeApi.api.update = APIConstants.api_device_type_update
            deviceTypeApi.api.patch = APIConstants.api_device_type_patch
            deviceTypeApi.api.delete = APIConstants.api_device_type_delete
        },

        mounted() {

            this.emitter.on("new-lang", _lang => {
                this.setLang(_lang)
            });
        },

        methods: {

            setLang(_lang) {
                this.pageCaption = _lang.DEVICE_TYPES ?? 'Device Types'
            },

            // updateSortedData($column, $direction) {
            //     this.sortDirection = $direction
            //     this.sortColumn = $column
            //     Sorting.doSort(this.filteredDeviceTypes, this.sortColumn, this.sortDirection)
            // },

            // updateFilteredData($filter) {
            //     this.filteredDeviceTypes = this.deviceTypes;
            //     this.filteredDeviceTypes = Filtering.doFilter(this.filteredDeviceTypes, this.sortColumn, $filter)
            // },

            // setCompactView(value) {
            //     console.log(value)
            //     this.compactView = value
            // },

            // async doDeleteType(key, id) {

            //     const confirmDelete = await this.$refs.confirmDialogue.showDialogue({
            //         title: DeviceTypeStringConstants.DEVICE_TYPE_DELETING_CAPTION,
            //         message: DeviceTypeStringConstants.DEVICE_TYPE_DELETING_MESSAGE + '"' +
            //         this.filteredDeviceTypes[key].device_type_name + '"?',
            //         okButton: DeviceTypeStringConstants.DEVICE_TYPE_DELETING_CAPTION,
            //     })

            //     if (confirmDelete) {
            //         axios.delete(APIConstants.api_device_type_delete + id)
            //             .then(resp => {
            //                 this.filteredDeviceTypes.splice(key, 1);
            //                 this.deviceTypes = this.filteredDeviceTypes
            //                 // console.log(key, id, " - deleted");
            //                 this.$root.$refs.toaster.showMessage(
            //                     MessagesConstants.DELETED_MESSAGE,
            //                     MessagesConstants.PROCESS_SUCCESSFULLY
            //                 )
            //             })
            //             .catch(error => {
            //                 console.log(error);
            //             })
            //     } else {
            //         console.log(MessagesConstants.DELETING_CANCELLED)
            //     }
            // },

            // async setDeviceType() {
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
            // async doEditType(key, id) {
            //     const _edit = await this.$refs.addDeviceType.showDialogue(
            //         {
            //             edit_mode: true,
            //             title: DeviceTypeStringConstants.DEVICE_TYPE_EDITING_TITLE,
            //             message: DeviceTypeStringConstants.DEVICE_TYPE_EDITING_MESSAGE,
            //             device_type_name: this.deviceTypes[key].device_type_name,
            //             device_type_desc: this.deviceTypes[key].device_type_desc,
            //             device_type_image: this.deviceTypes[key].device_type_image,
            //             okButton: DeviceTypeStringConstants.DEVICE_TYPE_EDITBUTTON_CAPTION,
            //         }
            //     )

            //     if (_edit) {
            //         let editDeviceTypePost = {
            //             device_type_name: this.$refs.addDeviceType.device_type_name,
            //             device_type_image: this.$refs.addDeviceType.device_type_image,
            //             device_type_desc: this.$refs.addDeviceType.device_type_desc
            //         }
            //         //console.log(editDeviceTypePost);

            //         axios.put(APIConstants.api_device_type_update + id, editDeviceTypePost)
            //             .then(resp => {
            //                 // console.log(resp['data']);
            //                 this.deviceTypes[key].device_type_name = resp['data'].device_type_name;
            //                 this.deviceTypes[key].device_type_desc = resp['data'].device_type_desc;
            //                 this.deviceTypes[key].device_type_image = resp['data'].device_type_image;
            //                 this.$root.$refs.toaster.showMessage(
            //                     MessagesConstants.EDITED_MESSAGE,
            //                     MessagesConstants.PROCESS_SUCCESSFULLY
            //                 );
            //             })
            //             .then(resp => {
            //                 // this.$root.$refs.DeviceRef.getData();
            //             })
            //             .catch(error => {
            //                 this.$root.$refs.toaster.showMessage(
            //                     MessagesConstants.EDITING_ERROR,
            //                     ParsingErrors.getError(error),
            //                     ParsingErrors.ERROR_LEVEL_ERROR
            //                 )
            //             })
            //     } else {
            //         console.log(MessagesConstants.EDITING_CANCELLED);
            //     }

            // },
        },

    };
</script>

<style>


</style>
