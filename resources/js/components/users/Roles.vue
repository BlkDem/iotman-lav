<template>
    <div class="mt-55"></div>

    <data-table
            :api="roles.api"
            :dataFields="roles.rolesFields"
            :pageCaption="roles.rolesCaption"
    >
    </data-table>

</template>

<script>
import MessagesConstants from '../strings_constants/strings'
import APIConstants from "../../api/rest_api";
import DataTable from '../db/DataTable.vue';
import Api from '../../api/ApiStruct';
import FieldStruct from './RolePermissionFieldStruct';

    export default {

        components: {
            DataTable
        },

        data() {
            return {
                roles: {
                    rolesCaption: MessagesConstants.ROLES,

                    api: { Api },

                    rolesFields: [
                        ...FieldStruct.RolePermissionFieldStruct
                    ],

                },

            }
        },

        newLang(event) {
            console.log(event)
        },

        created() {

            const roleApi = this.roles.api

            roleApi.get =    APIConstants.api_roles_read_page
            roleApi.insert = APIConstants.api_role_create
            roleApi.update = APIConstants.api_role_update
            roleApi.patch =  APIConstants.api_role_patch
            roleApi.delete = APIConstants.api_role_delete
        },

        mounted() {

            this.emitter.on("new-lang", _lang => {
                this.setLang(_lang)
            });
        },

        methods: {

            setLang(_lang) {
                this.pageCaption = _lang.ROLES || 'Roles'
            },
        },

    };
</script>

<style>


</style>
