<template>
    <div class="mt-55"></div>

    <data-table
            :api="micros.api"
            :dataFields="micros.microsFields"
            :pageCaption="micros.microsCaption"
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
            micros: {
                    microsCaption: MessagesConstants.MICROS,

                    api: { Api },

                    microsFields: [
                        ...FieldStruct.MicroFieldStruct
                    ],

                },


        }
    },

    created() {
        const microApi = this.micros.api

        microApi.get =    APIConstants.api_micros_read_page
        microApi.insert = APIConstants.api_micro_create
        microApi.update = APIConstants.api_micro_update
        microApi.patch =  APIConstants.api_micro_patch
        microApi.delete = APIConstants.api_micro_delete

    }
}
</script>

<style>

</style>
