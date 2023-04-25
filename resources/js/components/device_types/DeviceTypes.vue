<template>
    <div class="mt-55"></div>

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
import DeviceTypeFieldStruct from './FieldStruct';
import Api  from './ApiStruct';

    export default {

        components: {
            DataTable
        },

        data() {
            return {
                deviceTypes: {
                    deviceTypesCaption: MessagesConstants.DEVICE_TYPES,

                    api: {
                        Api
                    },

                    deviceTypesFields: [
                        ...DeviceTypeFieldStruct.FieldStruct
                    ],

                },
            }
        },

        newLang(event) {
            console.log(event)
        },

        created() {

            const deviceTypeApi = this.deviceTypes.api;

            deviceTypeApi.get    = APIConstants.api_devices_types_read_page;
            deviceTypeApi.insert = APIConstants.api_device_type_create;
            deviceTypeApi.update = APIConstants.api_device_type_update;
            deviceTypeApi.patch  = APIConstants.api_device_type_patch;
            deviceTypeApi.delete = APIConstants.api_device_type_delete;
        },

        mounted() {

            this.emitter.on("new-lang", _lang => {
                this.setLang(_lang)
            });
        },

        methods: {

            setLang(_lang) {
                this.pageCaption = _lang.DEVICE_TYPES || 'Device Types'
            },
        },

    };
</script>

<style>


</style>
