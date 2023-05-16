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

                    paramTypesFields: [
                        ...FieldStruct.ParamTypeFieldStruct
                    ],

                },

            }
        },

        newLang(event) {
            console.log(event)
        },

        created() {

            this.paramTypes.api = APIConstants.param_types

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
