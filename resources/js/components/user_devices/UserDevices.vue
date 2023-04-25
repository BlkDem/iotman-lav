<template>
    <div style="margin-top: 5.5rem"></div>

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
                    :isAdditionalCaption="additionalCaption"
                    @onRowClick="onRowClick">
                </data-table>

            </template>

            <template v-slot:slave>

                <data-table
                    :api="userDevices.api"
                    :dataFields="userDevices.userDevicesFields"
                    :pageCaption="userDevices.userDevicesCaption"
                    :isSlave="true"
                    :foreignValue="userDevices.selectedFkValue"
                >
                </data-table>

            </template>


        </MasterSlaveLayout>

</template>

<script>

import MessagesConstants from '../strings_constants/strings'
import APIConstants from "../../api/rest_api";
import DataTable from '../../components/db/DataTable.vue';
import MasterSlaveLayout from '../../layouts/MasterSlaveLayout.vue';
import FieldStruct from './FieldStruct';
import Api from '../../api/ApiStruct';

export default {

    components: {
        DataTable, MasterSlaveLayout,
    },

    data() {
        return {

            //DataSet is readonly
            usersReadOnly: true,

            //Additional Card Caption
            additionalCaption: true,

            //Page Caption
            layoutCaption: MessagesConstants.USER_DEVICES,

            //User`s Devices model
            userDevices: {
                userDevicesCaption: MessagesConstants.USER_DEVICES,

                api: { Api },

                userDevicesFields: [
                    ...FieldStruct.UserDeviceFieldStruct
                ],

                // user_id: 'user_id',
                // user_id_value: 1,

            },

            //User`s model
            users: {
                usersCaption: MessagesConstants.USERS,

                api: { Api },

                usersFields: [
                    ...FieldStruct.UserFieldStruct

                ],

                selectedName: 'user_name',

                //selected album id for child table images
                selectedFkValue: 0,

            },


        }
    },

    created() {

        const apiUserDevices = this.userDevices.api

        apiUserDevices.get = APIConstants.api_user_devices_read_page
        apiUserDevices.insert = APIConstants.api_user_device_create
        apiUserDevices.update = APIConstants.api_user_device_update
        apiUserDevices.delete = APIConstants.api_user_device_delete
        apiUserDevices.patch =  APIConstants.api_user_device_patch

        const apiUsers = this.users.api

        apiUsers.get = APIConstants.api_users_lookup

    },

    methods: {
        onRowClick(dataEvent) {
            this.userDevices.selectedFkValue = dataEvent
        }
    },

};
</script>

<style>

</style>
