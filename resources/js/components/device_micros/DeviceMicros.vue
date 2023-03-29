<template>
    <div style="margin-top: 5.5rem">
        <!-- {{ pageCaption }} -->
    </div>

    <data-table
        :api="devices.api"
        :dataFields="devices.devicesFields"
        :pageCaption="devices.devicesCaption"
        :selectableRow="true"
        :selectedName="devices.selectedName"
        :readOnly="true"
        @onRowClick="onRowClick">
    </data-table>

    <data-table
        :api="deviceMicros.api"
        :dataFields="deviceMicros.deviceMicrosFields"
        :pageCaption="deviceMicros.deviceMicrosCaption"
        :foreignKey="deviceMicros.device_id"
        :foreignValue="devices.selectedFkValue">
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
                        type: String,
                        isVirtualImage: true,
                        isHighLight: true,
                        isSortable: false,
                        VirtualImage: 'fa-solid fa-images fa-2x',
                        columnsCount: 2
                    },

                    {
                        fieldName: 'id',
                        fieldCaption: 'ID',
                        type: Number,
                        isSortable: true,
                        isHighLight: true,
                        columnsCount: 2
                    },

                    {
                        fieldName: 'device_name',
                        fieldCaption: 'Name',
                        type: String,
                        // isEditable: true,
                        isSortable: true,
                        columnsCount: 6
                    },

                    {
                        fieldName: 'micros_count',
                        fieldCaption: 'Cnt',
                        type: Number,
                        isSortable: true,
                        isHighLight: true,
                        columnsCount: 2
                    },

                ],

                selectedName: 'device_name',

                selectedFkValue: 0,

            },

            deviceMicros: {

                    deviceMicrosCaption: MessagesConstants.DEVICE_MICROS,

                    api: {
                        get: '',
                        insert: '',
                        update: '',
                        delete: '',
                        patch: ''
                    },

                    deviceMicrosFields: [
                        {
                            fieldName: 'Image',
                            fieldCaption: '',
                            type: String,
                            isImage: false,
                            isVirtualImage: true,
                            VirtualImage: 'fa-solid fa-microchip fa-2x',
                            isEditable: false,
                            isFieldIgnore: true,
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
                            fieldName: 'device_micro_idx',
                            fieldCaption: 'Idx',
                            type: String,
                            isImage: false,
                            isEditable: true,
                            isSortable: true,
                            isHighLight: false,
                            columnsCount: 2
                        },

                        {
                            fieldName: 'device_micro_desc',
                            fieldCaption: 'Description',
                            type: String,
                            isImage: false,
                            isText: true,
                            isEditable: true,
                            isSortable: true,
                            isHighLight: false,
                            columnsCount: 2
                        },
                        {
                            fieldName: 'device_id',
                            displayName: 'device_name',
                            fieldCaption: 'Device',
                            type: String,
                            isImage: false,
                            isEditable: false,
                            isSortable: true,
                            isHighLight: false,
                            columnsCount: 2,
                            lookupId: 'device_id',
                            lookupApi: APIConstants.api_devices_read,
                            isLookup: true,
                        },
                        {
                            fieldName: 'micro_id',
                            displayName: 'micro_name',
                            fieldCaption: 'Micro',
                            type: String,
                            isImage: false,
                            isEditable: false,
                            isSortable: true,
                            isHighLight: false,
                            columnsCount: 2,
                            lookupId: 'micro_id',
                            lookupApi: APIConstants.api_micros_read,
                            isLookup: true,
                        },
                    ],

                    device_id: 'device_id',
                    device_id_value: 1,
                },


        }
    },

    created() {
        const deviceMicroApi = this.deviceMicros.api

        deviceMicroApi.get =    APIConstants.api_device_micros_read_page
        deviceMicroApi.insert = APIConstants.api_device_micro_create
        deviceMicroApi.update = APIConstants.api_device_micro_update
        deviceMicroApi.patch =  APIConstants.api_device_micro_patch
        deviceMicroApi.delete = APIConstants.api_device_micro_delete

        const apiDevices = this.devices.api

        // apiDevices.get =    APIConstants.api_albums_lookup
        apiDevices.get =    APIConstants.api_devices_lookup


    },

    methods: {
        onRowClick(dataEvent) {
            console.log(dataEvent)
            this.devices.selectedFkValue = dataEvent
        }
    }
}
</script>

<style>

</style>
