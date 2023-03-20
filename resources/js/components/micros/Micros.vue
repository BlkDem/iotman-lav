<template>
    <div style="margin-top: 5.5rem">
        <!-- {{ pageCaption }} -->
    </div>

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


export default {
    components: {DataTable},
    data() {
        return {
            micros: {
                    microsCaption: MessagesConstants.MICROS,

                    api: {
                        get: '',
                        insert: '',
                        update: '',
                        delete: '',
                        patch: ''
                    },

                    microsFields: [

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
                            fieldName: 'micro_name',
                            fieldCaption: 'Name',
                            type: String,
                            isImage: false,
                            isEditable: true,
                            isSortable: true,
                            isHighLight: false,
                            columnsCount: 2
                        },

                        {
                            fieldName: 'micro_desc',
                            fieldCaption: 'Description',
                            type: String,
                            isImage: false,
                            isEditable: true,
                            isSortable: true,
                            isHighLight: false,
                            columnsCount: 3
                        },
                        {
                            fieldName: 'micro_config',
                            fieldCaption: 'Config',
                            type: String,
                            isImage: false,
                            isEditable: true,
                            isSortable: true,
                            isHighLight: false,
                            columnsCount: 3
                        },
                    ],

                },


        }
    },

    created() {
        const microApi = this.micros

        microApi.api.get =    APIConstants.api_micros_read_page
        microApi.api.insert = APIConstants.api_micro_create
        microApi.api.update = APIConstants.api_micro_update
        microApi.api.patch =  APIConstants.api_micro_patch
        microApi.api.delete = APIConstants.api_micro_delete

    }
}
</script>

<style>

</style>
