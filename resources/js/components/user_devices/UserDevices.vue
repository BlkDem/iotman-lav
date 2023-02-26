<template>
    <div v-show="userDeviceVisible">
        <!-- <AddDevice ref="addDevice"></AddDevice>
    <ConfirmDialogue ref="confirmDialogue" /> -->
        <h1 class="align-left px-4 pb-3" style="margin-top: 5.5rem">
            User Devices
        </h1>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded">
            <div class="container-fluid">
                <div class="navbar-collapse" id="navbarColor02">
                    <ul class="navbar-nav me-auto  d-flex">
                        <li class="nav-item  d-flex py-1">
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
                        <button class="btn btn-primary" @click="setDevice">
                            Add Device
                        </button>
                    </div>
                </div>
            </div>
        </nav>

        <div>
            <h5 class="text-primary my-2">{{ dataDescription }}</h5>
        </div>

        <div>
            <!-- <h1>User Devices</h1> -->
            <div class="row my-2" v-if="!compactView">
                <div class="p-2 col-sm-4 col-xs-4 col-lg-4" v-for="(user_device, key) in filteredUserDevices"
                    v-bind:key="key" v-bind:id="user_device.id">
                    <div class="card border-light">
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
                            <button class="btn btn-info btn-width-40 mx-1" @click="doEdit(key, device.id)">
                                <i class="fas fa-edit" aria-hidden="true"></i>
                                Edit
                            </button>

                            <button class="btn btn-warning btn-width-40 mx-1" @click="doDelete(key, device.id)">
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
            <div class="card border-primary mb-1 w-100" v-for="(user_device, key) in filteredUserDevices"
                v-bind:key="key" v-bind:id="user_device.id">
                <div class="mx-2 my-2">
                    <div class="row vertical-center">
                        <div class="col-sm-1 col-xs-1 col-lg-1">
                            <img v-bind:src="user_device.device_type_image" class="device-image" />
                        </div>
                        <div class="col-sm-1 col-xs-1 col-lg-1 align-left">
                            <span class="text-info"> {{ user_device.id }} </span>
                        </div>
                        <div class="col-sm-3 col-xs-3 col-lg-3 align-left">
                                {{ user_device.user_device_name }}
                        </div>
                        <div class="col-sm- col-xs-2 col-lg-2 align-left">
                                <span class="text-info">{{ user_device.device_name }}</span>
                        </div>
                        <div class="col-sm-3 col-xs-3 col-lg-3 align-left">
                                {{ user_device.device_hwid }}
                        </div>
                        <div class="col-sm-2 col-xs-2 col-lg-2 edit-buttons">
                            <button class="btn btn-info mx-2" @click="doEdit(key, user_device.id)">
                                <i class="fas fa-edit" aria-hidden="true"></i>
                            </button>
                            <button class="btn btn-secondary" @click="doDelete(key, user_device.id)">
                                <i class="fa fa-trash" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Paginator ref="paginatorDevices"></Paginator>
    </div>
</template>

<script lang="js">

import ConfirmDialogue from "../../components/common/ConfirmDialogue.vue";
// import AddDevice from "./AddDevice.vue";
import Paginator from "../../components/common/Paginator.vue";
import UserDeviceStringConstants from "../../components/strings_constants/user_devices/index";
import MessagesConstants from "../strings_constants/strings.js";
import APIConstants from "../../rest_api.js";
import Sorting from "../common/js/Sorting.js";

    export default {
        components: {
            ConfirmDialogue,
            Paginator /*MyMqtt*/,
        },

        data() {
            return {
                userDeviceVisible: true,
                userDevice_filter: "",
                user_devices: [],
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
            if (localStorage.UserDeviceCompactView==null) {
                localStorage.UserDeviceCompactView=this.compactView;
            }

            this.dataDescription=UserDeviceStringConstants.USER_DEVICE_DATA_DESCRIPTION; //device dataset description
            this.getUserDevices();
        },

        mounted() {
            if (localStorage.getItem('CompactView')) {
                this.compactView=(localStorage.getItem('CompactView')==='true');
            }
        },

        watch: {
            userDevice_filter: function () {
                handler: this.doFilter();
            },

            selectSort: function () {
                handler: this.doSort();
            },

            // compactView: function () {
            //     localStorage.CompactView=this.compactView;
            // },
        },

        computed: {
            SortName() {
                return MessagesConstants.SortingCaption(this.sortColumn, this.sortDirection)
            },

            // getCompactView() {
            //     return this.compactView;
            // },
        },

        methods: {
            doSort($column) {
                Sorting.doSort(this.filteredUserDevices, $column, this.sortDirection)
                this.sortColumn = $column;
            },

            doFilter() {
                this.filteredUserDevices=this.user_devices;

                const res=this.filteredUserDevices.filter((user_device)=> {
                        if (this.userDevice_filter==="") return true;
                        else return (user_device.device_name .toLowerCase() .indexOf(this.userDevice_filter.toLowerCase()) > -1);
                    }
                )

                if (this.user_devices.length > res.length) {
                    this.filteredUserDevices=res;
                    this.doSort();
                }
            },

            getUserDevices() {
                fetch(APIConstants.api_user_devices_read)
                .then((response) => response.json())
                .then((response) => {
                        this.filteredUserDevices = response.data;
                        //MessagesConstants.processDeviceStrings(this.filteredUserDevices);
                        this.user_devices = this.filteredUserDevices;
                        this.doSort(this.sortColumn);
                    }
                )
                .catch((err) => console.log(err));
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
