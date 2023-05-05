<template>
    <div class="mt-55"></div>

    <data-table
            :api="permissions.api"
            :dataFields="permissions.permissionsFields"
            :pageCaption="permissions.permissionsCaption"
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
                permissions: {
                    permissionsCaption: MessagesConstants.PERMISSIONS,

                    api: { Api },

                    permissionsFields: [
                        ...FieldStruct.RolePermissionFieldStruct
                    ],

                },

            }
        },

        newLang(event) {
            console.log(event)
        },

        created() {

            const permissionApi = this.permissions.api

            permissionApi.get =    APIConstants.api_permissions_read_page
            permissionApi.insert = APIConstants.api_permission_create
            permissionApi.update = APIConstants.api_permission_update
            permissionApi.patch =  APIConstants.api_permission_patch
            permissionApi.delete = APIConstants.api_permission_delete
        },

        mounted() {

            this.emitter.on("new-lang", _lang => {
                this.setLang(_lang)
            });
        },

        methods: {

            setLang(_lang) {
                this.pageCaption = _lang.PERMISSIONS || 'Permissions'
            },
        },

    };
</script>

<style>


</style>
