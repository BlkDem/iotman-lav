<template>

    <div v-if="visible">
        <AddDevice ref="addDevice"></AddDevice>
        <ConfirmDialogue ref="confirmDialogue" />
        <div class="row">
            <div class="col-sm-6 col-xs-6 col-lg-6 p-2">
                <h1 class="align-left px-4">Registered Devices</h1>
            </div>
            <div class="col-sm-6 col-xs-6 col-lg-6 p-2" style="text-align: right !important;">
                <button class="btn btn-primary" @click="compactView=true">
                    <i class="fas fa-list"></i>
                </button>
                <button class="btn btn-primary m-2" @click="compactView=false">
                    <i class="fas fa-th-large"></i>
                </button>
                <button class="btn btn-primary" @click="setDevice">
                    Add Device
                </button>
            </div>
        </div>
        <div>
            <h4 class="text-primary">{{ data_description }}</h4>
        </div>

        <div class="row" v-if="!compactView">
            <div class="col-sm-4 col-xs-4 col-lg-4 p-2" v-for="(device, key) in devices" v-bind:key="key"
                v-bind:id="device.id">
                <div class="card border-light">
                    <h3 class="card-header">{{ device.device_name }} <span class="text-info">({{ device.id }})</span>
                    </h3>
                    <div class="card-body">
                        <h5 class="card-title text-info">{{ device.device_type_name }}</h5>
                        <h6 class="card-subtitle text-muted">{{ device.device_desc }}</h6>
                    </div>
                    <img v-bind:src="device.device_type_image" />
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">HWID: {{ device.device_hwid }}</li>
                    </ul>
                    <div class="card-body">
                        <button class="btn btn-info" @click="doEdit(key, device.id)">
                            <i class="fas fa-edit" aria-hidden="true"></i>
                            Edit
                        </button>

                        <button class="btn btn-secondary" @click="doDelete(key, device.id)">
                            <i class="fa fa-trash" aria-hidden="true"></i>
                            Delete
                        </button>

                    </div>
                </div>
            </div>
        </div>

        <!-- compact view -->
        <div v-if="compactView">
            <div class="card border-primary mb-4 w-100" v-for="(device, key) in devices" v-bind:key="key"
                v-bind:id="device.id">
                <div class="card-header">
                    <div class="row">
                        <div class="col-sm-1 col-xs-1 col-lg-1 ">
                            <img v-bind:src="device.device_type_image" class="device-image" />
                        </div>
                        <div class="col-sm-3 col-xs-3 col-lg-3  align-left">
                            <h5>{{device.device_name}}<span class="text-info"> ({{ device.id}}) </span></h5>
                        </div>
                        <div class="col-sm-6 col-xs-4 col-lg-6 align-left">
                            <h6>{{ device.device_type_name }}: HWID ({{device.device_hwid}})</h6>
                        </div>
                        <div class="col-sm-2 col-xs-2 col-lg-2 align-right">
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
import ConfirmDialogue from '../../components/common/ConfirmDialogue.vue';
import AddDevice from './AddDevice.vue';
import DeviceTypesCombo from '../../components/device_types/DeviceTypesCombo.vue';
import Paginator from '../../components/Paginator.vue';
import DeviceStringConstants from '../../components/strings_constants/devices/index';
import MessagesConstants from '../../components/strings_constants/messages.js';
import APIConstants from '../../rest_api.js';
// import MyMqtt from '../components/MyMqtt.vue';

    export default {
        components: { ConfirmDialogue, AddDevice, DeviceTypesCombo, Paginator, /*MyMqtt*/},

        data() {
            return {
                devices: [],
                data_description: '',
                visible: true,
                compactView: true
            };
        },

        created() {
            this.data_description = DeviceStringConstants.DEVICE_DATA_DESCRIPTION; //device dataset description
            this.getDevices(); //loading devices dataset via API
            console.log('API version: ', APIConstants.apiVersion);
        },

        methods: {

            //mutating 'null' 'undefined' to predefined consts
            processStrings()   
            {
                this.devices.forEach((dev, key) => {
                    this.devices[key].device_desc = (dev.device_desc == null)? 
                        MessagesConstants.NO_DESCRIPTION : dev.device_desc;
                    this.devices[key].device_hwid = (dev.device_hwid == null)? 
                        DeviceStringConstants.NO_HWID : dev.device_hwid;
                })
            },

            //deleting devices
            async doDelete(key, id) { 
                //deleting confirmation dialogue    
                const ok = await this.$refs.confirmDialogue.showDialogue({ 
                    title: DeviceStringConstants.DEVICE_DELETING_CAPTION,
                    message: DeviceStringConstants.DEVICE_DELETING_MESSAGE + '"' + 
                    this.devices[key].device_name + '"?',
                    okButton: DeviceStringConstants.DEVICE_DELETING_CAPTION,
                })
                
                if (ok) {
                    //deleting devices item via API
                    axios.delete(APIConstants.api_device_delete + id)
                        .then(resp => {
                            this.devices.splice(key, 1);                            
                            console.log(key, id, " - deleted");
                            this.$root.$refs.toaster.setMessage(
                                MessagesConstants.DELETED_MESSAGE, 
                                MessagesConstants.PROCESS_SUCCESSFULLY
                            );
                        })
                        .catch(error => {
                            console.log(error);
                        })
                } else {
                    console.log(MessagesConstants.DELETING_CANCELLED);
                }
            },

            //loading devices dataset via API
            getDevices(api_url) {
                fetch(APIConstants.api_devices_read)
                    .then(response => response.json())
                    .then(response => {
                        this.devices = response.data;
                        this.processStrings();
                    })
                    .catch(err => console.log(err));
            },

            //setting Device Type to Device
            async setDeviceType($device_type_id, $item) {
                axios.get(APIConstants.api_device_types_read + $device_type_id)
                    .then(resp_type => {
                        $item.device_type_image = resp_type['data'].data.device_type_image;
                        $item.device_type_name = resp_type['data'].data.device_type_name;
                    })
            },

            //create Device
            async setDevice() {
                //opening Device Dialogue
                const _add = await this.$refs.addDevice.showDialogue({
                    edit_mode: false,
                    title: DeviceStringConstants.DEVICE_ADDING_TITLE,
                    message: DeviceStringConstants.DEVICE_ADDING_MESSAGE,
                    device_name: DeviceStringConstants.DEVICE_NAME_PLACEHOLDER,
                    device_desc: DeviceStringConstants.DEVICE_DESC_PLACEHOLDER,
                    device_hwid: DeviceStringConstants.DEVICE_HWID_PLACEHOLDER,
                    device_type_id: DeviceStringConstants.DEVICE_DEVICETYPEID_PLACEHOLDER,
                    okButton: DeviceStringConstants.DEVICE_ADDBUTTON_CAPTION,
                })

                if (_add) {
                    //creating Device via API
                    axios.post(APIConstants.api_device_create + '?device_name=' +  this.$refs.addDevice.device_name +
                            '&device_type_id=' + this.$refs.addDevice.device_type_id + 
                            '&device_desc=' + this.$refs.addDevice.device_desc)
                        .then(resp => {
                            console.log(resp['data']);
                            let newDevice = {
                                device_name: resp['data'].device_name,
                                device_desc: resp['data'].device_desc,
                                device_type_id: resp['data'].device_type_id,
                                device_type_name: '',
                                device_type_image: '',
                                id: resp['data'].id
                            }   
                            this.devices.push(newDevice);
                            this.$root.$refs.toaster.setMessage(MessagesConstants.ADDED_MESSAGE, MessagesConstants.PROCESS_SUCCESSFULLY);
                        })
                        .then(resp => {
                            this.setDeviceType(this.devices[this.devices.length-1].device_type_id, this.devices[this.devices.length-1]);
                        })
                        .catch(error => {
                            console.log(error);
                        })
                } else {
                    console.log(MessagesConstants.INSERTING_CANCELLED);
                }

            },

            //edit Device
            async doEdit(key, id) {
                //opening Device Dialogue
                const _edit = await this.$refs.addDevice.showDialogue({
                    edit_mode: true,
                    title: DeviceStringConstants.DEVICE_EDITING_TITLE,
                    message: DeviceStringConstants.DEVICE_EDITING_MESSAGE,
                    device_name: this.devices[key].device_name,
                    device_desc: this.devices[key].device_desc,
                    device_hwid: this.devices[key].device_hwid,
                    device_type_id: this.devices[key].device_type_id,
                    okButton: DeviceStringConstants.DEVICE_EDITBUTTON_CAPTION,
                })

                if (_edit) {
                    let editDevicePost = APIConstants.api_device_update+id+
                        '/?device_name=' + this.$refs.addDevice.device_name +
                        '&device_type_id=' + this.$refs.addDevice.device_type_id + 
                        '&device_desc=' + this.$refs.addDevice.device_desc +
                        '&device_hwid=' + this.$refs.addDevice.device_hwid;
                    console.log(editDevicePost);

                    //editing Device via API
                    axios.put(editDevicePost)
                        .then(resp => {
                            console.log(resp['data']);
                            this.devices[key].device_name = resp['data'].device_name;
                            this.devices[key].device_desc = resp['data'].device_desc;
                            this.devices[key].device_type_id = resp['data'].device_type_id;
                            this.devices[key].device_hwid = resp['data'].device_hwid;
                            this.$root.$refs.toaster.setMessage(
                                MessagesConstants.EDITED_MESSAGE, 
                                MessagesConstants.PROCESS_SUCCESSFULLY
                            );
                        })
                        .then(resp => {
                            this.setDeviceType(this.devices[key].device_type_id, this.devices[key]);
                        })
                        .catch(error => {
                            console.log(error);
                        })
                } else {
                    console.log(MessagesConstants.EDITING_CANCELLED);
                }

            },

            // Show or Hide Devices page
            ShowHide(isVisible) {
                this.visible = isVisible;
            },

            // getVisible() {
            //     return this.visible;
            // },
        },
        
    };
</script>

<style lang="scss" scoped>
    
    @import '../../../sass/aligns.scss';
    @import '../../../sass/lists.scss';
    
</style>