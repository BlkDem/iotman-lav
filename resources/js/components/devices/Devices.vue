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
                            isEditable: true,
                            isSortable: true,
                            isHighLight: false,
                            columnsCount: 2
                        },
                        {
                            fieldName: 'device_hwid',
                            fieldCaption: 'HWID',
                            type: String,
                            isImage: false,
                            isEditable: true,
                            isSortable: true,
                            isHighLight: true,
                            columnsCount: 2
                        },
                        {
                            fieldName: 'device_type_id',
                            fieldCaption: 'Device Type',
                            type: Number,
                            isImage: false,
                            isEditable: true,
                            isSortable: true,
                            isHighLight: false,
                            columnsCount: 2
                        },
                    ],

                },


        }
    },

    created() {
        const deviceApi = this.devices

        deviceApi.api.get =    APIConstants.api_devices_read_page
        deviceApi.api.insert = APIConstants.api_device_create
        deviceApi.api.update = APIConstants.api_device_update
        deviceApi.api.patch =  APIConstants.api_device_patch
        deviceApi.api.delete = APIConstants.api_device_delete

    }
}
</script>

<style>

</style>
