<template>
    <div class="mt-55"></div>

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
import Api from '../../api/ApiStruct';
import FieldStruct from './FieldStruct';

export default {
    components: {DataTable},
    data() {
        return {
            devices: {
                devicesCaption: MessagesConstants.DEVICES,

                api: { Api },

                devicesFields: [ ...FieldStruct.DeviceFieldStruct ],
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
