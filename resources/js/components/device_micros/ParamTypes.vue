<template>
    <div style="margin-top: 5.5rem"></div>

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

    export default {

        components: {
            DataTable
        },

        data() {
            return {
                paramTypes: {
                    paramTypesCaption: MessagesConstants.PARAM_TYPES,

                    api: {
                        get: '',
                        insert: '',
                        update: '',
                        delete: '',
                        patch: ''
                    },

                    paramTypesFields: [
                        {
                            fieldName: 'Image',
                            type: String,
                            isVirtualImage: true,
                            isHighLight: true,
                            isSortable: false,
                            VirtualImage: 'fa-solid fa-cubes fa-2x',
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
                            fieldName: 'type_name',
                            fieldCaption: 'Name',
                            type: String,
                            isImage: false,
                            isEditable: true,
                            isSortable: true,
                            isHighLight: false,
                            columnsCount: 3
                        },

                        {
                            fieldName: 'type_desc',
                            fieldCaption: 'Description',
                            type: String,
                            isImage: false,
                            isText: true,
                            isEditable: true,
                            isSortable: true,
                            isHighLight: false,
                            columnsCount: 5
                        },
                    ],

                },

            }
        },

        newLang(event) {
            console.log(event)
        },

        created() {

            const paramTypeApi = this.paramTypes

            paramTypeApi.api.get =    APIConstants.api_param_types_read_page
            paramTypeApi.api.insert = APIConstants.api_param_type_create
            paramTypeApi.api.update = APIConstants.api_param_type_update
            paramTypeApi.api.patch =  APIConstants.api_param_type_patch
            paramTypeApi.api.delete = APIConstants.api_param_type_delete
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
