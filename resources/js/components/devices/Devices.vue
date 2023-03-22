<template>
    <div style="margin-top: 5.5rem">
        <!-- {{ pageCaption }} -->
    </div>

    <data-table
            :api="devices.api"
            :dataFields="devices.devicesFields"
            :pageCaption="devices.devicesCaption"
        >
    </data-table>

</template>

<script>
import DataTable from '../db/DataTable.vue';
import MessagesConstants from '../strings_constants/strings'
import APIConstants from "../../api/rest_api";


export default {
    components: {DataTable},
    data() {
        return {
            devices: {
                    devicesCaption: MessagesConstants.DEVICES,

                    api: {
                        get: '',
                        insert: '',
                        update: '',
                        delete: '',
                        patch: ''
                    },

                    devicesFields: [
                        {
                            fieldName: 'Image',
                            fieldCaption: '',
                            type: String,
                            isImage: false,
                            isVirtualImage: true,
                            VirtualImage: 'fas fa-sun fa-2x',
                            isEditable: false,
                            isSortable: false,
                            isHighLight: true,
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
                            fieldName: 'device_name',
                            fieldCaption: 'Name',
                            type: String,
                            isImage: false,
                            isEditable: true,
                            isSortable: true,
                            isHighLight: false,
                            columnsCount: 2
                        },

                        {
                            fieldName: 'device_desc',
                            fieldCaption: 'Description',
                            type: String,
                            isImage: false,
                            isText: true,
                            isEditable: true,
                            isSortable: true,
                            isHighLight: false,
                            columnsCount: 3
                        },
                        // {
                        //     fieldName: 'device_hwid',
                        //     fieldCaption: 'HWID',
                        //     type: String,
                        //     isImage: false,
                        //     isEditable: true,
                        //     isSortable: true,
                        //     isHighLight: true,
                        //     columnsCount: 2
                        // },
                        {
                            fieldName: 'device_type_id',
                            displayName: 'device_type_name',
                            fieldCaption: 'Device Type',
                            type: String,
                            isImage: false,
                            isEditable: false,
                            isSortable: true,
                            isHighLight: false,
                            columnsCount: 3,
                            lookupId: 'device_type_id',
                            lookupApi: APIConstants.api_device_types_read,
                            isLookup: true,
                        },
                    ],

                },


        }
    },

    created() {
        const deviceApi = this.devices.api

        deviceApi.get =    APIConstants.api_devices_read_page
        deviceApi.insert = APIConstants.api_device_create
        deviceApi.update = APIConstants.api_device_update
        deviceApi.patch =  APIConstants.api_device_patch
        deviceApi.delete = APIConstants.api_device_delete

    }
}
</script>

<style>

</style>
