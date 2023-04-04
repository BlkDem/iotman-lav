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
import MessagesConstants from '../strings_constants/strings'
import APIConstants from "../../api/rest_api";
import DataTable from '../db/DataTable.vue';

    export default {

        components: {
            DataTable
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
                            columnsCount: 5
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
        },

    };
</script>

<style>


</style>
