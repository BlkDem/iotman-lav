<template>
    <div class="mt-55"></div>

    <data-table
        :api="paramTypes.api"
        :dataFields="paramTypes.paramTypesFields"
        :pageCaption="paramTypes.paramTypesCaption"
    >
    </data-table>

</template>

<script>

import MessagesConstants from '../strings_constants/strings'
import APIConstants from "../../api/rest_api";
import DataTable from '../db/DataTable.vue';
import Api from '../../api/ApiStruct';
import FieldStruct from './FieldStruct';

    export default {

        components: {
            DataTable
        },

        data() {
            return {

                //ParamType model
                paramTypes: {
                    paramTypesCaption: MessagesConstants.PARAM_TYPES,

                    api: { Api },

                    paramTypesFields: [ ...FieldStruct.ParamTypeFieldStruct ],

                },

            }
        },

        newLang(event) {
            console.log(event)
        },

        created() {

            const paramTypeApi = this.paramTypes.api

            paramTypeApi.get =    APIConstants.api_param_types_read_page
            paramTypeApi.insert = APIConstants.api_param_type_create
            paramTypeApi.update = APIConstants.api_param_type_update
            paramTypeApi.patch =  APIConstants.api_param_type_patch
            paramTypeApi.delete = APIConstants.api_param_type_delete
        },

        mounted() {

            this.emitter.on("new-lang", _lang => {
                this.setLang(_lang)
            });
        },

        methods: {

            setLang(_lang) {
                this.pageCaption = _lang.PARAM_TYPES ?? 'Param Types'
            },
        },

    };
</script>

<style>


</style>
