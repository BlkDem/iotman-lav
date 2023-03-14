<template>


        <div style="margin-top: 5.5rem">
            <!-- {{ pageCaption }} -->
        </div>

    <!-- <div v-show="userDeviceVisible"> -->
        <common-card :cardCaption="pageCaption" >
        <AddUserDevice ref="addUserDevice"></AddUserDevice>
        <ConfirmDialogue ref="confirmDialogue" />
        <!-- <h1 class="align-left px-4 pb-3" style="margin-top: 5.5rem">
            {{ pageCaption }}
        </h1> -->


        <table-nav
            :compactView="compactView"
            :sortColumn="sortColumn"
            :sortRules="sortRules"
            @setCompactView="setCompactView"
            @addEvent="setUserDevice"
            @updateSortedData="updateSortedData"
            @updateFilteredData="updateFilteredData"
        ></table-nav>


        <!-- <nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded">
            <div class="container-fluid">
                <div class="navbar-collapse" id="navbarColor02">
                    <ul class="navbar-nav me-auto  d-flex">
                        <li class="nav-item  d-flex py-1  w-100">
                            <input class="form-control me-sm-2" type="text" placeholder="Search"
                                v-model="userDevice_filter" />
                        </li>
                        <li class="nav-item dropdown me-auto vertical-center">
                            <a class="nav-link dropdown-toggle mx-2" data-bs-toggle="dropdown" href="#" role="button"
                                aria-haspopup="true" aria-expanded="false">{{ SortName }}</a>
                            <div class="dropdown-menu w-100">
                                <a class="dropdown-item" href="#" v-for="rule in sortRules" :key="rule.key"
                                    :value="rule.key" @click="doSort(rule.key)">{{ rule.title }}</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#" @click="sortDirection = !sortDirection;
                                    doSort(sortColumn); ">
                                    {{ sortDirection ? sortOrderStrings[0] : sortOrderStrings[1] }}
                                </a>
                            </div>
                        </li>
                    </ul>
                    <div class="d-flex">
                        <button class="btn btn-primary" :class="{'disabled' : compactView}"  @click="compactView = true">
                            <i class="fas fa-list"></i>
                        </button>
                        <button class="btn btn-primary mx-2" :class="{'disabled' : !compactView}"  @click="compactView = false">
                            <i class="fas fa-th-large"></i>
                        </button>
                        <button class="btn btn-primary" @click="setUserDevice">
                            Add Device
                        </button>
                    </div>
                </div>
            </div>
        </nav> -->

        <div>
            <!-- <h5 class="text-primary my-2 align-center">{{ dataDescription }}</h5> -->
        </div>

        <div>
            <!-- <h1>User Devices</h1> -->
            <div class="row my-2" v-show="!compactView">
                <div class="p-2 col-sm-4 col-xs-4 col-lg-4 fade-in" style="margin-bottom: 50px;" v-for="(user_device, key) in filteredUserDevices"
                    v-bind:key="key" v-bind:id="user_device.id">
                    <div class="card border-light align-center">
                        <h3 class="card-header">{{ user_device.user_device_name }}</h3>
                        <div class="card-body">
                            <h5 class="card-title text-info">{{ user_device.device_name }}</h5>
                            <h6 class="card-subtitle text-muted">{{ user_device.device_desc }}</h6>
                        </div>
                        <img v-bind:src="user_device.device_type_image">
                        <div class="card-body">
                            <p class="card-text">{{ user_device.device_type_desc }}</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">HWID: {{ user_device.device_hwid }}</li>
                            <li class="list-group-item">User Device ID: {{ user_device.id }}</li>
                        </ul>
                        <div class="card-body">
                            <li class="list-group-item">User: {{user_device.user_name}} ({{ user_device.user_id }})</li>
                        </div>
                        <div class="card-footer text-muted">
                            <button class="btn btn-info btn-width-40 mx-1" @click="doUserDeviceEdit(key, user_device.id)">
                                <i class="fas fa-edit" aria-hidden="true"></i>
                                Edit
                            </button>

                            <button class="btn btn-warning btn-width-40 mx-1" @click="doUserDeviceDelete(key, user_device.id)">
                                <i class="fa fa-trash" aria-hidden="true"></i>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- compact view -->
        <div v-show="compactView" class="my-2">

            <div class="card border-primary mb-1 w-100 fade-in" v-for="(user_device, key) in filteredUserDevices"
                v-bind:key="key" v-bind:id="user_device.id">
                <div class="mx-2 my-1">
                    <div class="row vertical-center">
                        <div class="col-sm-1 col-xs-1 col-lg-1 flex">
                            <img v-bind:src="user_device.device_type_image" class="device-image" />
                            <!-- <span class="badge light text-white bg-primary rounded-circle image-badge">
                                {{ user_device.id }}
                            </span> -->
                        </div>
                        <div class="col-sm-1 col-xs-1 col-lg-1 align-left">
                            <span class="text-info"> {{ user_device.id }} </span>
                        </div>
                        <div class="col-sm-2 col-xs-2 col-lg-2 align-left">
                                {{ user_device.user_name }}
                        </div>
                        <div class="col-sm-2 col-xs-2 col-lg-2 align-left">
                                {{ user_device.user_device_name }}
                        </div>
                        <div class="col-sm- col-xs-2 col-lg-2 align-left">
                                <span class="text-info">{{ user_device.device_name }}</span>
                        </div>
                        <div class="col-sm-2 col-xs-2 col-lg-2 align-left">
                                {{ user_device.device_hwid }}
                        </div>
                        <div class="col-sm-2 col-xs-2 col-lg-2 edit-buttons">
                            <button class="btn btn-info mx-2" @click="doUserDeviceEdit(key, user_device.id)">
                                <i class="fas fa-edit" aria-hidden="true"></i>
                            </button>
                            <button class="btn btn-secondary" @click="doUserDeviceDelete(key, user_device.id)">
                                <i class="fa fa-trash" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Paginator ref="paginatorUserDevices"></Paginator>
    </common-card>

</template>

<script lang = "js">

import ConfirmDialogue from "../../components/common/ConfirmDialogue.vue";
import AddUserDevice from "./AddUserDevice.vue";
import Paginator from "../../components/common/Paginator.vue";
import UserDeviceStringConstants from "../../components/strings_constants/user_devices/index";
import MessagesConstants from "../strings_constants/strings.js";
import APIConstants from "../../api/rest_api.js";
import Sorting from "../../helpers/Sorting.js";
import Filtering from "../../helpers/Filtering.js";
import ParsingErrors from "../../helpers/ParsingErrors";
import TableNav from '../../components/common/TableBar/TableNav.vue';


export default {
    components: {
        ConfirmDialogue,
        AddUserDevice,
        Paginator /*MyMqtt*/ ,
        TableNav
    },

    data() {
        return {
            userDeviceVisible: true,
            userDevice_filter: "",
            user_devices: [],
            pageCaption: MessagesConstants.USER_DEVICES ?? "User Devices",
            filteredUserDevices: [], //filtered array of devices
            dataDescription: "", //table data description label
            compactView: true, //copact view mode
            userDevice_filter: "", //filtering string
            sortOrderStrings: [
                MessagesConstants.SORT_ASC,
                MessagesConstants.SORT_DESC,
            ],
            sortOrder: MessagesConstants.SORT_ASC,
            sortDirection: false,
            userDeviceVisible: false,
            sortColumn: "user_device_name",
            sortRules: [{
                    key: "user_device_name",
                    title: MessagesConstants.SORT_BY_NAME
                },
                {
                    key: "id",
                    title: MessagesConstants.SORT_BY_ID
                },
            ],
        };
    },

    created() {
        if (localStorage.UserDeviceCompactView == null) {
            localStorage.UserDeviceCompactView = this.compactView;
        }

        this.dataDescription = UserDeviceStringConstants.USER_DEVICE_DATA_DESCRIPTION; //device dataset description
        this.getData();
    },

    mounted() {
        if (localStorage.getItem('CompactView')) {
            this.compactView = (localStorage.getItem('CompactView') === 'true');
        }
    },

    watch: {
        // userDevice_filter: function () {
        //     handler: this.doFilter();
        // },

        // selectSort: function () {
        //     handler: this.doSort();
        // },

        // compactView: function () {
        //     localStorage.CompactView = this.compactView;
        // },
    },

    computed: {
        SortName() {
            return MessagesConstants.SortingCaption(this.sortColumn, this.sortDirection)
        },
    },

    methods: {

        updateSortedData($column, $direction) {
            this.sortDirection = $direction
            this.sortColumn = $column
            Sorting.doSort(this.filteredUserDevices, this.sortColumn, this.sortDirection)
        },

            updateFilteredData($filter) {
                this.filteredUserDevices = this.user_devices;
                this.filteredUserDevices = Filtering.doFilter(this.filteredUserDevices, this.sortColumn, $filter)
            },

            setCompactView(value) {
                console.log(value)
                this.compactView = Boolean(value)
            },

        // doSort($column) {
        //     Sorting.doSort(this.filteredUserDevices, $column, this.sortDirection)
        //     this.sortColumn = $column;
        // },

        // doFilter() {

        //     if (this.filteredUserDevices != this.user_devices) {
        //         this.filteredUserDevices = this.user_devices
        //     }

        //     const res = this.filteredUserDevices.filter((user_device) => {
        //         if (this.userDevice_filter === "") return true;
        //         else return (user_device.user_device_name.toLowerCase().indexOf(this.userDevice_filter.toLowerCase()) > -1);
        //     })

        //     if (this.user_devices.length > res.length) {
        //         this.filteredUserDevices = res;
        //         this.doSort();
        //     }
        // },
        async getData(_currentPage = 1, _itemsPerPage = 5) {
            fetch(APIConstants.api_user_devices_read_page + _currentPage + "/" + _itemsPerPage)
                .then((response) => response.json())
                .then((response) => {
                    this.filteredUserDevices = response.data;
                    //MessagesConstants.processDeviceStrings(this.filteredUserDevices);
                    this.$refs.paginatorUserDevices.setPaginator({
                        pagesCount: response.paginator.PagesCount,
                        currentPage: response.paginator.CurrentPage,
                        itemsPerPage: response.paginator.ItemsPerPage,
                        recordsCount: response.paginator.RecordsCount
                    })

                    this.filteredUserDevices = this.filteredUserDevices.map((item) => {
                        item.device_desc = (item.device_desc == null) ? MessagesConstants.NO_DESCRIPTION : item.device_desc
                        return item
                    })

                    this.user_devices = this.filteredUserDevices;
                    // this.doSort(this.sortColumn);
                })
                .catch((err) => console.log(err));
        },


        async doUserDeviceDelete(key, id) {

            const confirmDelete = await this.$refs.confirmDialogue.showDialogue({
                title: UserDeviceStringConstants.USER_DEVICE_DELETING_CAPTION,
                message: UserDeviceStringConstants.USER_DEVICE_DELETING_MESSAGE + '"' +
                this.filteredUserDevices[key].user_device_name + '"?',
                okButton: UserDeviceStringConstants.USER_DEVICE_DELETING_CAPTION,
            })

            if (confirmDelete) {
                axios.delete(APIConstants.api_user_device_delete + id)
                    .then(resp => {
                        this.filteredUserDevices.splice(key, 1);
                        this.user_devices = this.filteredUserDevices
                        // console.log(key, id, " - deleted");
                        this.$root.$refs.toaster.showMessage(MessagesConstants.DELETED_MESSAGE,
                            MessagesConstants.PROCESS_SUCCESSFULLY);
                    })
                    .catch(error => {
                        console.log(error);
                    })
            } else {
                console.log(MessagesConstants.DELETING_CANCELLED);
            }
        },

        getNewUserDeviceView($user_device_id, $key) { //attach device type name and image to device
            axios
                .get(APIConstants.api_user_devices_read + $user_device_id)
                .then((resp_user_devices) => {
                    //console.log(resp_user_devices.data.data, this.filteredUserDevices[$key])
                    this.filteredUserDevices[$key].device_type_image = resp_user_devices["data"].data.device_type_image;
                    this.filteredUserDevices[$key].device_name = resp_user_devices["data"].data.device_name;
                    this.filteredUserDevices[$key].device_hwid = resp_user_devices["data"].data.device_hwid;
                });
        },

        async setUserDevice() {
            const _add = await this.$refs.addUserDevice.showDialogue({
                edit_mode: false,
                title: UserDeviceStringConstants.USER_DEVICE_ADDING_TITLE,
                message: UserDeviceStringConstants.USER_DEVICE_ADDING_MESSAGE,
                user_device_name: "",
                user_device_pass: "",
                device_desc: "",
                device_id: "",
                user_id: "",
                okButton: UserDeviceStringConstants.USER_DEVICE_ADDBUTTON_CAPTION,
            })

            if (_add) {

                axios.post(APIConstants.api_user_device_create, {
                        user_device_name: this.$refs.addUserDevice.user_device_name,
                        user_device_pass: this.$refs.addUserDevice.user_device_pass,
                        device_id: this.$refs.addUserDevice.device_id,
                        user_id: this.$refs.addUserDevice.user_id
                    })
                    .then(resp => {
                        //console.log(resp.data);
                        let newUserDevice = {
                            user_device_name: resp['data'].user_device_name,
                            user_device_pass: resp['data'].user_device_pass,
                            device_id: resp['data'].device_id,
                            user_id: resp['data'].user_id,
                            device_type_image: "",
                            device_name: "",
                            device_hwid: "",
                            device_desc: "",
                            id: resp['data'].id
                        }
                        //console.log("newUserDevice", newUserDevice)
                        this.filteredUserDevices.push(newUserDevice);
                        this.user_devices = this.filteredUserDevices

                        this.getNewUserDeviceView(this.filteredUserDevices.at(-1).id,
                            (this.filteredUserDevices.length - 1))

                        this.$root.$refs.toaster.showMessage(
                            MessagesConstants.ADDED_MESSAGE,
                            MessagesConstants.PROCESS_SUCCESSFULLY
                        );
                    })
                    .catch(error => {
                        //
                        //const Toaster = app.component('toaster')
                        this.$root.$refs.toaster.showMessage(
                            MessagesConstants.INSERTING_ERROR,
                            ParsingErrors.getError(error),
                            ParsingErrors.ERROR_LEVEL_ERROR
                        )
                    })
            } else {
                console.log(MessagesConstants.INSERTING_CANCELLED);
            }

        },

        async doUserDeviceEdit(key, id) {
            const _edit = await this.$refs.addUserDevice.showDialogue({
                edit_mode: true,
                title: UserDeviceStringConstants.USER_DEVICE_EDITING_TITLE,
                message: UserDeviceStringConstants.USER_DEVICE_EDITING_MESSAGE,
                user_device_name: this.filteredUserDevices[key].user_device_name,
                user_device_pass: this.filteredUserDevices[key].user_device_pass,
                device_desc: this.filteredUserDevices[key].device_desc,
                device_id: this.filteredUserDevices[key].device_id,
                user_id: this.filteredUserDevices[key].user_id,
                okButton: UserDeviceStringConstants.USER_DEVICE_EDITBUTTON_CAPTION,
            })

            if (_edit) {
                let editUserDevicePost = {
                    user_device_name: this.$refs.addUserDevice.user_device_name,
                    user_device_pass: this.$refs.addUserDevice.user_device_pass,
                    device_id: this.$refs.addUserDevice.device_id,
                    user_id: this.$refs.addUserDevice.user_id
                }
                console.log(editUserDevicePost);

                axios.put(APIConstants.api_user_device_update + id, editUserDevicePost)
                    .then(resp => {
                        // console.log(resp['data']);
                        this.filteredUserDevices[key].user_device_name = resp['data'].user_device_name;
                        this.filteredUserDevices[key].user_device_pass = resp['data'].user_device_pass;
                        this.filteredUserDevices[key].device_id = resp['data'].device_id;
                        this.filteredUserDevices[key].user_id = resp['data'].user_id;

                        this.getNewUserDeviceView(this.filteredUserDevices[key].id, key)

                        this.$root.$refs.toaster.showMessage(
                            MessagesConstants.EDITED_MESSAGE,
                            MessagesConstants.PROCESS_SUCCESSFULLY
                        );
                    })
                    .then(resp => {
                        // this.$root.$refs.DeviceRef.getDevices();
                    })
                    .catch(error => {
                        this.$root.$refs.toaster.showMessage(
                            MessagesConstants.EDITING_ERROR,
                            ParsingErrors.getError(error),
                            ParsingErrors.ERROR_LEVEL_ERROR
                        )
                    })
            } else {
                console.log(MessagesConstants.EDITING_CANCELLED);
            }

        },



        ShowHide(isVisible) {
            this.userDeviceVisible = isVisible;
        },

        // getVisible() {
        //     return this.visible;
        // }
    },

};

</script>

<style lang="scss">

</style>
