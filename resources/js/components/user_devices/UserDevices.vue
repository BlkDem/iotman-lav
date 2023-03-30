<template>
    <div style="margin-top: 5.5rem">

        <MasterSlaveLayout
            :masterWidthProp="'w-25'"
            :slaveWidthProp="'w-75'"
        >

            <template v-slot:master>

                <data-table
                    :api="users.api"
                    :dataFields="users.usersFields"
                    :pageCaption="users.usersCaption"
                    :selectableRow="true"
                    :selectedName="users.selectedName"
                    :readOnly="usersReadOnly"
                    @onRowClick="onRowClick">
                </data-table>

            </template>

            <template v-slot:slave>

                <data-table
                    :api="userDevices.api"
                    :dataFields="userDevices.userDevicesFields"
                    :pageCaption="userDevices.userDevicesCaption"
                    :foreignKey="userDevices.user_id"
                    :foreignValue="userDevices.selectedFkValue"
                    >
                </data-table>

            </template>


        </MasterSlaveLayout>

        <!-- <div class="row">
            <div class="col-sm-4 col-xs-4 col-lg-4">
                <data-table
                    :api="users.api"
                    :dataFields="users.usersFields"
                    :pageCaption="users.usersCaption"
                    :selectableRow="true"
                    :selectedName="users.selectedName"
                    :readOnly="usersReadOnly"
                    @onRowClick="onRowClick">
                </data-table>

            </div>
            <div class="col-sm-8 col-xs-8 col-lg-8">
                <data-table
                    :api="userDevices.api"
                    :dataFields="userDevices.userDevicesFields"
                    :pageCaption="userDevices.userDevicesCaption"
                    :foreignKey="userDevices.user_id"
                    :foreignValue="userDevices.selectedFkValue"
                    >
                </data-table>
            </div>
        </div> -->
    </div>
</template>

<script>
import MessagesConstants from '../strings_constants/strings'
import APIConstants from "../../api/rest_api";
import DataTable from '../../components/db/DataTable.vue';
import MasterSlaveLayout from '../../layouts/MasterSlaveLayout.vue';

export default {

    // emits: ['setAdditionalCaption'],

    components: {
        DataTable, MasterSlaveLayout,
    },

    data() {
        return {
            usersReadOnly: true,

            //Images Widget Setup
            userDevices: {
                userDevicesCaption: MessagesConstants.USER_DEVICES,

                api: {
                    get: '',
                    insert: '',
                    update: '',
                    delete: '',
                    patch: ''
                },

                userDevicesFields: [
                    {
                        fieldName: 'device_type_image',
                        fieldCaption: '',
                        type: String,
                        isImage: true,
                        isEditable: false,
                        isFieldIgnore: true,
                        // isSortable: true,
                        isHighLight: false,
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
                        fieldName: 'user_device_name',
                        fieldCaption: 'Name',
                        type: String,
                        isImage: false,
                        isText: false,
                        isEditable: true,
                        isSortable: true,
                        isHighLight: false,
                        columnsCount: 3
                    },

                    {
                            fieldName: 'device_id',
                            displayName: 'device_name',
                            fieldCaption: 'Device',
                            type: String,
                            isImage: false,
                            isEditable: false,
                            isSortable: true,
                            isHighLight: false,
                            columnsCount: 3,
                            lookupId: 'device_id',
                            lookupApi: APIConstants.api_devices_read,
                            isLookup: true,
                        },

                    // {
                    //     fieldName: 'device_type_name',
                    //     fieldCaption: 'Device Type',
                    //     type: String,
                    //     isImage: false,
                    //     isText: true,
                    //     isEditable: true,
                    //     isSortable: true,
                    //     isHighLight: false,
                    //     columnsCount: 3
                    // },
                    {
                            fieldName: 'user_id',
                            displayName: 'user_name',
                            fieldCaption: 'User',
                            type: String,
                            isImage: false,
                            isEditable: false,
                            isSortable: true,
                            isHighLight: false,
                            columnsCount: 2,
                            lookupId: 'user_id',
                            lookupApi: APIConstants.api_users_read,
                            isLookup: true,
                        },

                ],

                user_id: 'user_id',
                user_id_value: 1,

            },

            users: {
                usersCaption: MessagesConstants.USERS,

                api: {
                    get: '',
                    insert: '',
                    update: '',
                    delete: '',
                    patch: ''
                },

                usersFields: [

                    {
                        fieldName: 'Image',
                        type: String,
                        isVirtualImage: true,
                        isHighLight: true,
                        isSortable: false,
                        VirtualImage: 'fa-solid fa-user-tie fa-2x',
                        columnsCount: 2
                    },

                    {
                        fieldName: 'id',
                        fieldCaption: 'ID',
                        type: Number,
                        isSortable: true,
                        isHighLight: true,
                        columnsCount: 2
                    },

                    {
                        fieldName: 'user_name',
                        fieldCaption: 'Name',
                        type: String,
                        // isEditable: true,
                        isSortable: true,
                        columnsCount: 6
                    },

                    {
                        fieldName: 'devices_count',
                        fieldCaption: 'Cnt',
                        type: Number,
                        isSortable: true,
                        isHighLight: true,
                        columnsCount: 2
                    },

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
        // apiImages.get = APIConstants.api_images_read_page
        apiUserDevices.insert = APIConstants.api_user_device_create
        apiUserDevices.update = APIConstants.api_user_device_update
        apiUserDevices.delete = APIConstants.api_user_device_delete
        apiUserDevices.patch =  APIConstants.api_user_device_patch

        const apiUsers = this.users.api

        apiUsers.get =    APIConstants.api_users_lookup

    },

    methods: {
        onRowClick(dataEvent) {
            console.log(dataEvent)
            this.userDevices.selectedFkValue = dataEvent
        }
    },

};
</script>

<style>

</style>
