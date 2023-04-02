<template>
    <div style="margin-top: 5.5rem">
        <!-- {{ pageCaption }} -->
    </div>

    <data-table
            :api="presets.api"
            :dataFields="presets.presetsFields"
            :pageCaption="presets.presetsCaption"
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
            presets: {
                    presetsCaption: MessagesConstants.PRESETS,

                    api: {
                        get: '',
                        insert: '',
                        update: '',
                        delete: '',
                        patch: ''
                    },

                    presetsFields: [
                    {
                            fieldName: 'Image',
                            fieldCaption: '',
                            type: String,
                            isImage: false,
                            isVirtualImage: true,
                            VirtualImage: 'fa-solid fa-gear fa-2x',
                            isEditable: false,
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
                            fieldName: 'preset_key',
                            fieldCaption: 'Key',
                            type: String,
                            isImage: false,
                            isEditable: true,
                            isSortable: true,
                            isHighLight: false,
                            columnsCount: 3
                        },

                        {
                            fieldName: 'preset_value',
                            fieldCaption: 'Value',
                            type: String,
                            isImage: false,
                            isEditable: true,
                            isSortable: true,
                            isHighLight: true,
                            columnsCount: 3
                        },

                        {
                            fieldName: 'preset_description',
                            fieldCaption: 'Description',
                            type: String,
                            isImage: false,
                            isText: true,
                            isEditable: true,
                            isSortable: true,
                            isHighLight: false,
                            columnsCount: 2
                        },
                    ],

                },


        }
    },

    created() {
        const presetApi = this.presets.api

        presetApi.get =    APIConstants.api_presets_read_page
        presetApi.insert = APIConstants.api_preset_create
        presetApi.update = APIConstants.api_preset_update
        presetApi.patch =  APIConstants.api_preset_patch
        presetApi.delete = APIConstants.api_preset_delete

    }
}
</script>

<style>

</style>
