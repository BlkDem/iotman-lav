<template>
    <div class="mt-55"></div>

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
import Api from '../../api/ApiStruct';
import FieldStruct from '../presets/FieldStruct';

export default {
    components: {DataTable},
    data() {
        return {
            presets: {
                presetsCaption: MessagesConstants.PRESETS,

                api: { Api },

                presetsFields: [
                    ...FieldStruct.PresetFieldStruct
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
