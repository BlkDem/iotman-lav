<template>
    <div style="margin-top: 5.5rem">
        <!-- {{ pageCaption }} -->
    </div>

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

// import ParsingErrors from "../common/js/ParsingErrors.js";
// import Imager from '../../components/common/Imager.vue';

// import dsDeviceType from "../../api/dsDeviceType";

// import TableNav from '../../components/common/TableBar/TableNav.vue';

    export default {

        components: {
            // ConfirmDialogue,
            // AddDeviceType,
            // Paginator,
            DataTable
            // Imager,
            // TableNav,
            // dsDeviceType
        },

        data() {
            return {
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
                            fieldCaption: '',
                            type: String,
                            isImage: false,
                            isVirtualImage: true,
                            VirtualImage: 'fa-solid fa-user-tie fa-2x',
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
                            fieldName: 'name',
                            fieldCaption: 'Name',
                            type: String,
                            isImage: false,
                            isEditable: true,
                            isSortable: true,
                            isHighLight: false,
                            columnsCount: 4
                        },

                        {
                            fieldName: 'email',
                            fieldCaption: 'Email',
                            type: String,
                            isImage: false,
                            isEditable: true,
                            isSortable: true,
                            isHighLight: true,
                            columnsCount: 4
                        },

                        // {
                        //     fieldName: 'email_verified_at',
                        //     fieldCaption: 'Verified Email',
                        //     type: String,
                        //     isImage: false,
                        //     isDateTime: true,
                        //     isEditable: false,
                        //     isSortable: true,
                        //     isHighLight: false,
                        //     columnsCount: 2
                        // },

                    ],

                },

            }
        },

        newLang(event) {
            console.log(event)
        },

        created() {

            const userApi = this.users

            userApi.api.get =    APIConstants.api_users_read_page
            userApi.api.insert = APIConstants.api_user_create
            userApi.api.update = APIConstants.api_user_update
            userApi.api.patch =  APIConstants.api_user_patch
            userApi.api.delete = APIConstants.api_user_delete
        },

        mounted() {

            this.emitter.on("new-lang", _lang => {
                this.setLang(_lang)
            });
        },

        methods: {

            setLang(_lang) {
                this.pageCaption = _lang.DEVICE_TYPES ?? 'Device Types'
            },
        },

    };
</script>

<style>


</style>
