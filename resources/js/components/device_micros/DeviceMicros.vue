<template>
    <div style="margin-top: 5.5rem">
        <!-- {{ pageCaption }} -->
    </div>


    <MasterSlaveLayout
        :layoutCaption="layoutCaption"
    >

            <template v-slot:master>

                <data-table
                    :api="devices.api"
                    :dataFields="devices.devicesFields"
                    :pageCaption="devices.devicesCaption"
                    :selectableRow="true"
                    :selectedName="devices.selectedName"
                    :readOnly="true"
                    :isAdditionalCaption="true"
                    @onRowClick="onRowClick">
                </data-table>

            </template>

            <template v-slot:slave>

                <data-table
                    :api="deviceMicros.api"
                    :isSlave="true"
                    :dataFields="deviceMicros.deviceMicrosFields"
                    :pageCaption="deviceMicros.deviceMicrosCaption"
                    :foreignValue="devices.selectedFkValue"

                    :selectableRow="true"
                    :selectedName="deviceMicros.selectedName"
                    :readOnly="false"
                    :isAdditionalCaption="true"

                    @onRowClick="onDeviceMicroRowClick">

                >
                </data-table>

                <data-table
                    :api="microParams.api"
                    :isSlave="true"
                    :dataFields="microParams.microParamsFields"
                    :pageCaption="microParams.microParamsCaption"
                    :foreignValue="deviceMicros.selectedFkValue">
                </data-table>

            </template>


        </MasterSlaveLayout>


</template>

<script>
import DataTable from '../db/DataTable.vue';
import MessagesConstants from '../strings_constants/strings'
import APIConstants from "../../api/rest_api";
import MasterSlaveLayout from '../../layouts/MasterSlaveLayout.vue';


export default {
    components: {
        DataTable, MasterSlaveLayout
    },

    data() {
        return {

            layoutCaption: MessagesConstants.DEVICE_MICROS,

            //DataSet fields setup

            //Produced devices
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
                        VirtualImage: 'fas fa-sun fa-2x',
                        selectedVirtualImage: 'fas fa-sun fa-2x',
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

            //Device`s Controllers
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

                    selectedName: 'device_micro_idx',

                    selectedFkValue: 0,
                },

            //Controller`s parameters
            microParams: {

                    microParamsCaption: MessagesConstants.MICRO_PARAMS,

                    api: {
                        get: '',
                        insert: '',
                        update: '',
                        delete: '',
                        patch: ''
                    },

                    microParamsFields: [

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
                            fieldName: 'device_micro_id',
                            displayName: 'device_micro_idx',
                            fieldCaption: 'Idx',
                            type: String,
                            isImage: false,
                            isEditable: false,
                            isSortable: true,
                            isHighLight: false,
                            columnsCount: 2,
                            lookupId: 'device_micro_id',
                            lookupApi: APIConstants.api_device_micros_read,
                            isLookup: true,
                        },

                        {
                            fieldName: 'param_name',
                            fieldCaption: 'Name',
                            type: String,
                            isImage: false,
                            isEditable: true,
                            isSortable: true,
                            isHighLight: false,
                            columnsCount: 1
                        },

                        {
                            fieldName: 'param_type_id',
                            displayName: 'type_name',
                            fieldCaption: 'Type',
                            type: String,
                            isImage: false,
                            isEditable: false,
                            isSortable: true,
                            isHighLight: false,
                            columnsCount: 1,
                            lookupId: 'param_type_id',
                            lookupApi: APIConstants.api_param_types_read,
                            isLookup: true,
                        },

                        {
                            fieldName: 'param_value',
                            fieldCaption: 'Value',
                            type: String,
                            isImage: false,
                            isEditable: true,
                            isSortable: true,
                            isHighLight: false,
                            columnsCount: 1
                        },

                        {
                            fieldName: 'param_in',
                            fieldCaption: 'Dir',
                            isDirectionVirtualImage: true,
                            subscribeVirtualImage: 'fa-solid fa-arrow-left',
                            publishVirtualImage: 'fa-solid fa-arrow-right',
                            biDirectionalVirtualImage: 'fa-solid fa-arrows-left-right',
                            // type: String,
                            // isImage: false,
                            // isEditable: true,
                            isSortable: true,
                            // isHighLight: false,
                            columnsCount: 1
                        },

                        {
                            fieldName: 'param_suff',
                            fieldCaption: 'Suff',
                            type: String,
                            isImage: false,
                            isEditable: true,
                            isSortable: true,
                            isHighLight: false,
                            columnsCount: 1
                        },
                        {
                            fieldName: 'param_min',
                            fieldCaption: 'Min',
                            type: String,
                            isImage: false,
                            isEditable: true,
                            isSortable: true,
                            isHighLight: false,
                            columnsCount: 1
                        },
                        {
                            fieldName: 'param_max',
                            fieldCaption: 'Max',
                            type: String,
                            isImage: false,
                            isEditable: true,
                            isSortable: true,
                            isHighLight: false,
                            columnsCount: 1
                        },

                    ],

                    device_micro_id: 'device_micro_id',
                    device_micro_id_value: 1,
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

        const microParamsApi = this.microParams.api

        microParamsApi.get =    APIConstants.api_micro_params_read_page
        microParamsApi.insert = APIConstants.api_micro_param_create
        microParamsApi.update = APIConstants.api_micro_param_update
        microParamsApi.patch =  APIConstants.api_micro_param_patch
        microParamsApi.delete = APIConstants.api_micro_param_delete

        const apiDevices = this.devices.api

        apiDevices.get =    APIConstants.api_devices_lookup


    },

    methods: {
        onRowClick(dataEvent) {
            // console.log(dataEvent)
            this.devices.selectedFkValue = dataEvent
        },

        onDeviceMicroRowClick(dataEvent) {
            // console.log(dataEvent)
            this.deviceMicros.selectedFkValue = dataEvent
        }
    }
}
</script>

<style>

</style>
