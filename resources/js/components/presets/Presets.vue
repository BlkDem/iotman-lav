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
                            VirtualImage: 'fa-solid fa-microchip fa-2x',
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
                            isHighLight: true,
                            columnsCount: 2
                        },

                        {
                            fieldName: 'preset_value',
                            fieldCaption: 'Value',
                            type: String,
                            isImage: false,
                            isEditable: true,
                            isSortable: true,
                            isHighLight: false,
                            columnsCount: 2
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
                            columnsCount: 4
                        },
                    ],

                },


        }
    },

    created() {
        const presetApi = this.presets

        presetApi.api.get =    APIConstants.api_presets_read_page
        presetApi.api.insert = APIConstants.api_preset_create
        presetApi.api.update = APIConstants.api_preset_update
        presetApi.api.patch =  APIConstants.api_preset_patch
        presetApi.api.delete = APIConstants.api_preset_delete

    }
}
</script>

<style>

</style>
