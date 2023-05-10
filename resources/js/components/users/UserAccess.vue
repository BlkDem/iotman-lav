<template>
    <div class="mt-55"></div>

    <MasterSlaveLayout
        :layoutCaption="layoutCaption"
    >

            <template v-slot:master>

                <data-table
                    :api="users.api"
                    :dataFields="users.usersFields"
                    :pageCaption="users.usersCaption"
                    :selectableRow="true"
                    :selectedName="users.selectedName"
                    :readOnly="usersReadOnly"
                    :isAdditionalCaption="true"
                    @onRowClick="onRowClick"
                >
                </data-table>

            </template>

            <template v-slot:slave>

                <data-table
                    :api="roles.api"
                    :dataFields=  "roles.rolesFields"
                    :pageCaption= "roles.rolesCaption"
                    :foreignValue="users.selectedFkValue"
                    :isSlave="true"
                >
                </data-table>

            </template>


        </MasterSlaveLayout>


</template>

<script>
import MessagesConstants from '../strings_constants/strings'
import APIConstants from "../../api/rest_api";
import DataTable from '../db/DataTable.vue';
import MasterSlaveLayout from '../../layouts/MasterSlaveLayout.vue';
import pathes from '../../config/pathes';
import Api from '../../api/ApiStruct';
import UserFieldStruct from './ShortUserStruct';
import RolesFieldStruct from './UserRoleStruct';

export default {

    components: {
        DataTable, MasterSlaveLayout
    },

    data() {
        return {

            currentUser: '',

            layoutCaption: MessagesConstants.USERROLES,

            usersReadOnly: true,

            //User Roles model
            roles: {
                rolesCaption: MessagesConstants.USERROLES,

                api: { Api },

                rolesFields: [
                    ...RolesFieldStruct.FieldStruct
                ],

                user_id: 'user_id',
                // user_id_value: 1,

            },

            //User model
            users: {
                usersCaption: MessagesConstants.USERS,

                api: { Api },

                usersFields: [
                    ...UserFieldStruct.FieldStruct
                ],

                selectedName: 'name',

                //selected album id for child table images
                selectedFkValue: 0,

            },


        }
    },

    created() {

        const apiUsers = this.users.api

        apiUsers.get =    APIConstants.api_users_read_page;

        const apiUserRoles = this.roles.api

        // apiUserRoles.get =    APIConstants.api_user_roles_read_page
        apiUserRoles.get =    APIConstants.api_user_roles_read_page
        apiUserRoles.insert = APIConstants.api_user_role_create
        apiUserRoles.update = APIConstants.api_user_role_update
        apiUserRoles.delete = APIConstants.api_user_role_delete
        // apiUserRoles.patch =  APIConstants.api_user_role_patch


    },

    methods: {
        onRowClick(fkKey) {
            console.log(fkKey)
            this.users.selectedFkValue = fkKey
        },
    },

};
</script>

<style>

</style>
