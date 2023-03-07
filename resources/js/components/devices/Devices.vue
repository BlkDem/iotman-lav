<template>
    <div v-show="deviceVisible">
        <AddDevice ref="addDevice"></AddDevice>
        <ConfirmDialogue ref="confirmDialogue" />
        <h1 class="align-left px-4 pb-3" style="margin-top: 5.5rem">
            {{ pageCaption }}
        </h1>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded">
            <div class="container-fluid">
                <div class="navbar-collapse" id="navbarColor02">
                    <ul class="navbar-nav me-auto  d-flex">
                        <li class="nav-item  d-flex py-1  w-100">
                            <input class="form-control me-sm-2" type="text" placeholder="Search"
                                v-model="device_filter" />
                        </li>
                        <li class="nav-item dropdown me-auto vertical-center">
                            <a class="nav-link dropdown-toggle mx-2" data-bs-toggle="dropdown" href="#" role="button"
                                aria-haspopup="true" aria-expanded="false">{{ SortingPopupCaption }}</a>
                            <div class="dropdown-menu w-100">
                                <a class="dropdown-item" href="#" v-for="rule in sortRules" :key="rule.key"
                                    :value="rule.key" @click="doSort(rule.key)">{{ rule.title }}</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#" @click="sortDirection = !sortDirection; doSort(sortColumn);">
                                    {{sortDirection ? sortOrderStrings[0] : sortOrderStrings[1]}}
                                </a>
                            </div>
                        </li>
                    </ul>
                    <div class="d-flex">
                        <button class="btn btn-primary " :class="{'disabled' : compactView}" @click="compactView = true">
                            <i class="fas fa-list"></i>
                        </button>
                        <button class="btn btn-primary mx-2" :class="{'disabled' : !compactView}" @click="compactView = false">
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
            <h5 class="text-primary my-2">{{ dataDescription }} </h5>
        </div>

        <div class="row my-2" v-if="!compactView">
            <div class="col-sm-4 col-xs-4 col-lg-4 p-2 fade-in" v-for="(device, key) in filteredDevices" v-bind:key="key"
                v-bind:id="device.id">
                <div class="card border-light">
                    <h3 class="card-header">
                        {{ device.device_name }}
                        <span class="text-info">({{ device.id }})</span>
                    </h3>
                    <div class="card-body">
                        <h5 class="card-title text-info">
                            {{ device.device_type_name }}
                        </h5>
                        <h6 class="card-subtitle text-muted">
                            {{ device.device_desc }}
                        </h6>
                    </div>
                    <img v-bind:src="device.device_type_image" />
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">HWID: {{ device.device_hwid }}</li>
                    </ul>
                    <div class="card-body">
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

        <!-- compact view -->
        <div v-show="compactView" class="my-2">
            <div class="card border-primary mb-1 w-100 fade-in" v-for="(device, key) in filteredDevices" v-bind:key="key"
                v-bind:id="device.id"   >
                <div class="mx-2 my-2">
                    <div class="row vertical-center">
                        <div class="col-sm-1 col-xs-1 col-lg-1 flex">
                            <img v-bind:src="device.device_type_image" class="device-image" />
                        </div>
                        <div class="col-sm-1 col-xs-1 col-lg-1 align-left">
                                <span class="text-info"> {{ device.id }} </span>
                        </div>
                        <div class="col-sm-2 col-xs-2 col-lg-2 align-left">
                                {{ device.device_name}}
                        </div>
                        <div class="col-sm-3 col-xs-3 col-lg-3 align-left">
                                <span class="text-info">{{ device.device_type_name }} </span>
                        </div>
                        <div class="col-sm-3 col-xs-3 col-lg-3 align-left">
                                {{ device.device_hwid ?? 'no hardware address ' }}
                        </div>
                        <div class="col-sm-2 col-xs-2 col-lg-2 edit-buttons">
                            <button class="btn btn-info mx-2" @click="doEdit(key, device.id)">
                                <i class="fas fa-edit" aria-hidden="true"></i>
                            </button>

                            <button class="btn btn-secondary" @click="doDelete(key, device.id)">
                                <i class="fa fa-trash" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Paginator ref="paginatorDevices"></Paginator>
        <!-- <MyMqtt></MyMqtt> -->
    </div>
</template>

<script>
    import ConfirmDialogue from "../../components/common/ConfirmDialogue.vue";
    import AddDevice from "./AddDevice.vue";
    import DeviceTypesCombo from "../../components/device_types/DeviceTypesCombo.vue";
    import Paginator from "../../components/common/Paginator.vue";
    import DeviceStringConstants from "../../components/strings_constants/devices/index";
    import MessagesConstants from "../strings_constants/strings.js";
    import APIConstants from "../../rest_api.js";
    import Sorting from "../common/js/Sorting.js";
    import ParsingErrors from "../common/js/ParsingErrors.js";
    // import MyMqtt from '../components/MyMqtt.vue';

    export default {

        components: {
            ConfirmDialogue,
            AddDevice,
            DeviceTypesCombo,
            Paginator /*MyMqtt*/ ,
        },

        data() {
            return {
                devices: [], // api loaded list of devices
                pageCaption: MessagesConstants.DEVICES ?? 'Devices',
                filteredDevices: [], //filtered array of devices
                dataDescription: "", //table data description label
                deviceVisible: true, //devices view visibilty
                compactView: true, //copact view mode
                device_filter: "", //filtering string
                sortOrderStrings: [
                    MessagesConstants.SORT_ASC,
                    MessagesConstants.SORT_DESC,
                ],
                sortOrder: MessagesConstants.SORT_ASC,
                sortDirection: false,
                sortColumn: "device_name",
                sortRules: [{
                        key: "device_name",
                        title: MessagesConstants.SORT_BY_NAME
                    },
                    {
                        key: "id",
                        title: MessagesConstants.SORT_BY_ID
                    },
                ],
                checked: false,
            };
        },

        created() {
            if (localStorage.DeviceCompactView == null) {
                localStorage.DeviceCompactView = this.compactView;
            }
            this.dataDescription = DeviceStringConstants.DEVICE_DATA_DESCRIPTION; //device dataset description
            this.getData(); //loading devices dataset via API
            console.log("API version: ", APIConstants.apiVersion);
        },

        mounted() {
            if (localStorage.getItem('CompactView')) {
                this.compactView = (localStorage.getItem('CompactView') === 'true');
            }
            this.emitter.on("new-lang", _lang => {
            this.setLang(_lang)
        });

        },


        watch: {
            device_filter: function () {
                handler: this.doFilter();
            },

            selectSort: function () {
                handler: this.doSort();
            },

            compactView: function () {
                localStorage.CompactView = this.compactView;
            },
        },

        computed: {
            SortingPopupCaption() {
                return MessagesConstants.SortingCaption(this.sortColumn, this.sortDirection)
            },

            // getCompactView() {
            //     return this.compactView;
            // },
        },

        methods: {
            doSort($column) {
                Sorting.doSort(this.filteredDevices, $column, this.sortDirection)
                this.sortColumn = $column;
            },

            doFilter() {
                this.filteredDevices = this.devices;
                const res = this.filteredDevices.filter((device) => {
                    if (this.device_filter === "") return true;
                    else
                        return (
                            device.device_name
                            .toLowerCase()
                            .indexOf(this.device_filter.toLowerCase()) > -1
                        );
                });
                if (this.devices.length > res.length) {
                    this.filteredDevices = res;
                    this.doSort();
                }
                // return res;
            },

            //deleting devices
            async doDelete(key, id) {
                //deleting confirmation dialogue
                const confirmDelete = await this.$refs.confirmDialogue.showDialogue({
                    title: DeviceStringConstants.DEVICE_DELETING_CAPTION,
                    message: DeviceStringConstants.DEVICE_DELETING_MESSAGE +
                        '"' +
                        this.devices[key].device_name +
                        '"?',
                    okButton: DeviceStringConstants.DEVICE_DELETING_CAPTION,
                });

                if (confirmDelete) {
                    //deleting devices item via API
                    axios
                        .delete(APIConstants.api_device_delete + id)
                        .then((resp) => {
                            this.filteredDevices.splice(key, 1);
                            this.devices = this.filteredDevices;
                            console.log(key, id, " - deleted");

                            this.$root.$refs.toaster.showMessage(
                                MessagesConstants.PROCESS_SUCCESSFULLY,
                                MessagesConstants.DELETED_MESSAGE
                            );
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                } else {
                    console.log(MessagesConstants.DELETING_CANCELLED);
                }
            },

            //Fill empty values
            fillEmptyValues() {
                this.filteredDevices = this.filteredDevices.map((item) => {
                item.device_desc = item.device_desc ?? MessagesConstants.NO_DESCRIPTION
                item.device_hwid = item.device_hwid ?? MessagesConstants.NO_HWID
                return item
                })
            },

            //loading devices dataset via API
            async getData(_currentPage=1, _itemsPerPage=5) {
                await fetch(APIConstants.api_devices_read_page + _currentPage + "/" + _itemsPerPage)
                    .then((response) => response.json())
                    .then((response) => {
                        this.filteredDevices = response.data;

                        //Paginator setup
                        this.$refs.paginatorDevices.setPaginator(
                            {
                                pagesCount: response.paginator.PagesCount,
                                currentPage: response.paginator.CurrentPage,
                                itemsPerPage: response.paginator.ItemsPerPage,
                                recordsCount: response.paginator.RecordsCount
                            }
                        )

                        this.fillEmptyValues()

                        // console.log(this.filteredDevices)

                        //store items buffer
                        this.devices = this.filteredDevices;
                        this.doSort(this.sortColumn);
                    })
                    .catch((err) => console.log(err));
            },

            //setting Device Type to Device
            async setDeviceType($device_type_id, $item) { //attach device type name and image to device
                console.log($device_type_id, $item)
                axios
                    .get(APIConstants.api_device_types_read + $device_type_id)
                    .then((resp_type) => {
                        $item.device_type_image = resp_type["data"].data.device_type_image;
                        $item.device_type_name = resp_type["data"].data.device_type_name;
                    });
            },

            //create Device
            async setDevice() {
                //opening Device Dialogue
                const _add = await this.$refs.addDevice.showDialogue({
                    edit_mode: false,
                    title: DeviceStringConstants.DEVICE_ADDING_TITLE,
                    message: DeviceStringConstants.DEVICE_ADDING_MESSAGE,
                    device_name: "",
                    device_desc: "",
                    device_hwid: "",
                    device_pass: "",
                    device_type_id: "",
                    okButton: DeviceStringConstants.DEVICE_ADDBUTTON_CAPTION,
                });

                if (_add) {
                    //creating Device via API
                    console.log(this.$root.$refs, this.$refs, this.$parent.$refs)
                    axios
                        .post(APIConstants.api_device_create, {
                                device_name: this.$refs.addDevice.device_name,
                                device_type_id: this.$refs.addDevice.device_type_id,
                                device_hwid:  this.$refs.addDevice.device_hwid,
                                device_desc: this.$refs.addDevice.device_desc
                            }
                        )
                        .then((resp) => {
                            // console.log(resp);
                            let newDevice = {
                                device_name: resp["data"].device_name,
                                device_desc: resp["data"].device_desc,
                                // device_pass: resp["data"].device_pass,
                                device_hwid: resp["data"].device_hwid,
                                device_type_id: resp["data"].device_type_id,
                                device_type_name: "",
                                device_type_image: "",
                                id: resp["data"].id,
                            }
                            this.filteredDevices.push(newDevice)
                            this.fillEmptyValues()
                            this.devices = this.filteredDevices

                            this.$root.$refs.toaster.showMessage(
                                MessagesConstants.PROCESS_SUCCESSFULLY,
                                resp["data"].device_name + ': ' + MessagesConstants.ADDED_MESSAGE
                            )
                        })
                        .then((resp) => {

                            this.setDeviceType(
                                this.filteredDevices.at(-1).device_type_id,
                                this.filteredDevices.at(-1)
                            );
                        })
                        .catch((error) => {
                            //  console.log(error.response.data)

                            this.$root.$refs.toaster.showMessage(
                                MessagesConstants.INSERTING_ERROR,
                                ParsingErrors.getError(error),
                                ParsingErrors.ERROR_LEVEL_ERROR
                            )
                        })
                } else {
                    console.log(MessagesConstants.INSERTING_CANCELLED)
                }
            },

            //edit Device
            async doEdit(key, id) {
                //opening Device Dialogue
                //console.log(key, id)
                // this.$refs.addDevice.setDeviceTypeID(this.filteredDevices[key].device_type_id)
                const _edit = await this.$refs.addDevice.showDialogue({
                    edit_mode: true,
                    title: DeviceStringConstants.DEVICE_EDITING_TITLE,
                    message: DeviceStringConstants.DEVICE_EDITING_MESSAGE,
                    device_name: this.filteredDevices[key].device_name,
                    device_desc: (this.filteredDevices[key].device_desc === MessagesConstants.NO_DESCRIPTION)? "":
                                                                            this.filteredDevices[key].device_desc,
                    device_hwid: (this.filteredDevices[key].device_hwid === MessagesConstants.NO_HWID)? "":
                                                                            this.filteredDevices[key].device_hwid,
                    device_type_id: this.filteredDevices[key].device_type_id,
                    okButton: DeviceStringConstants.DEVICE_EDITBUTTON_CAPTION,
                })

                if (_edit) {
                    let editDevicePost = {
                            device_name: this.$refs.addDevice.device_name,
                            device_type_id: this.$refs.addDevice.device_type_id,
                            device_desc: this.$refs.addDevice.device_desc,
                            device_hwid: this.$refs.addDevice.device_hwid
                        }

                    //editing Device via API

                    axios
                        .put(APIConstants.api_device_update + id, editDevicePost)
                        .then((resp) => {
                            // console.log("response.data: ", resp.data);
                            this.filteredDevices[key].device_name = resp["data"].device_name;
                            this.filteredDevices[key].device_desc = resp["data"].device_desc;
                            this.filteredDevices[key].device_type_id = resp["data"].device_type_id;
                            this.filteredDevices[key].device_hwid = resp["data"].device_hwid;
                            // this.filteredDevices[key].device_pass = resp["data"].device_pass;
                            // console.log("devices: ", this.filteredDevices);
                        })
                        .then(() => {

                            this.fillEmptyValues()
                            this.devices = this.filteredDevices;
                            this.setDeviceType(
                                this.filteredDevices[key].device_type_id,
                                this.filteredDevices[key]
                            )

                            this.$root.$refs.toaster.showMessage(
                                MessagesConstants.PROCESS_SUCCESSFULLY,
                                MessagesConstants.EDITED_MESSAGE,
                            );

                        })

                        .then(resp => {
                            this.$root.$refs.DeviceUserRef.getData();
                        })

                        .catch((error) => {
                            // console.log(error.response?.data)
                            this.$root.$refs.toaster.showMessage(
                                MessagesConstants.INSERTING_ERROR,
                                ParsingErrors.getError(error),
                                ParsingErrors.ERROR_LEVEL_ERROR
                            )
                        })
                } else {
                    console.log(MessagesConstants.EDITING_CANCELLED);
                }
            },

            setLang(_lang) {
                this.pageCaption = _lang.HOME ?? 'Welcome'
            }
        },
    };

</script>

<style lang="scss">
.fade-in {
	opacity: 1;
	animation-name: fadeInOpacity;
	animation-iteration-count: 1;
	animation-timing-function: ease-in;
	animation-duration: 0.2s;
}
@keyframes fadeInOpacity {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
</style>
