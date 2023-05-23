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

    components: {
        DataTable
    },

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

        this.micros.api = APIConstants.micros

    }
}
</script>

<style>

</style>
