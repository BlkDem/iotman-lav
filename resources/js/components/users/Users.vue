<template>
    <div class="mt-55"></div>

    <data-table
            :api="users.api"
            :dataFields="users.usersFields"
            :pageCaption="users.usersCaption"
    >
    </data-table>

</template>

<script>
import MessagesConstants from '../strings_constants/strings'
import APIConstants from "../../api/rest_api";
import DataTable from '../db/DataTable.vue';
import Api from '../../api/ApiStruct';
import FieldStruct from '../users/FieldStruct';

    export default {

        components: {
            DataTable
        },

        data() {
            return {
                users: {
                    usersCaption: MessagesConstants.USERS,

                    api: { Api },

                    usersFields: [
                        ...FieldStruct.UserFieldStruct
                    ],

                },

            }
        },

        newLang(event) {
            console.log(event)
        },

        created() {

            const userApi = this.users.api

            userApi.get =    APIConstants.api_users_read_page
            userApi.insert = APIConstants.api_user_create
            userApi.update = APIConstants.api_user_update
            userApi.patch =  APIConstants.api_user_patch
            userApi.delete = APIConstants.api_user_delete
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
