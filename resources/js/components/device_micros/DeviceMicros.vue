<template>
    <div class="mt-55"></div>


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
                    @onDataClear="dataCLear"
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
import Api from '../../api/ApiStruct';
import FieldStruct from './FieldStruct';

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

                api: { Api },

                devicesFields: [ ...FieldStruct.DeviceFieldStruct ],

                selectedName: 'device_name',

                selectedFkValue: 0,

            },

            //Device`s Controllers
            deviceMicros: {

                    deviceMicrosCaption: MessagesConstants.DEVICE_MICROS,

                    api: { Api },

                    deviceMicrosFields: [ ...FieldStruct.DeviceMicroFieldStruct ],

                    device_id: 'device_id',
                    device_id_value: 1,

                    selectedName: 'device_micro_idx',

                    selectedFkValue: 0,
                },

            //Controller`s parameters
            microParams: {

                    microParamsCaption: MessagesConstants.MICRO_PARAMS,

                    api: { Api },

                    microParamsFields: [ ...FieldStruct.MicroParamFieldStruct ],

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

        this.microParams.api = APIConstants.micro_params
        // const microParamsApi = this.microParams.api

        // microParamsApi.get =    APIConstants.api_micro_params_read_page
        // microParamsApi.insert = APIConstants.api_micro_param_create
        // microParamsApi.update = APIConstants.api_micro_param_update
        // microParamsApi.patch =  APIConstants.api_micro_param_patch
        // microParamsApi.delete = APIConstants.api_micro_param_delete

        const apiDevices = this.devices.api

        apiDevices.get =    APIConstants.api_devices_lookup


    },

    methods: {
        onRowClick(dataEvent) {
            this.devices.selectedFkValue = dataEvent
        },

        onDeviceMicroRowClick(dataEvent) {
            this.deviceMicros.selectedFkValue = dataEvent
        },

        dataCLear() {
            // console.log('data clear')
            this.deviceMicros.selectedFkValue = 0
        }
    }
}
</script>

<style>

</style>
