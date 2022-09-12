<template>

    <div v-if="visible">
        <AddDevice ref="addDevice"></AddDevice>
        <ConfirmDialogue ref="confirmDialogue" />
        <div class="row">
            <div class="col-sm-4 col-xs-4 col-lg-4 p-2">
                <h1>Registered Devices</h1>
            </div>
            <div class="col-sm-4 col-xs-4 col-lg-4 p-2"></div>
            <div class="col-sm-4 col-xs-4 col-lg-4 p-2" style="text-align: right !important;">
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
            <h4 class="text-primary">All registered devices ready for use</h4>
        </div>
        
        <div class="row" v-if="!compactView">
            <div class="col-sm-4 col-xs-4 col-lg-4 p-2" v-for="(device, key) in devices" v-bind:key="key"
                v-bind:id="device.id">
                <div class="card border-light">
                    <h3 class="card-header">{{ device.device_name }} <span class="text-info">({{ device.id }})</span>
                    </h3>
                    <div class="card-body">
                        <h5 class="card-title text-info">{{ device.device_type_name }}</h5>
                        <h6 class="card-subtitle text-muted">{{ (device.device_desc === "undefined")? "no description" :
                            device.device_desc}}</h6>
                    </div>
                    <img v-bind:src="device.device_type_image" />
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">HWID: {{ device.device_hwid || "no hardware address" }}</li>
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
                        <!-- <ConfirmDialogue ref="confirmDialogue" /> -->

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
                            <h5>{{device.device_type_name}}<span class="text-info"> ({{ device.id}}) </span></h5>
                        </div>
                        <div class="col-sm-6 col-xs-4 col-lg-6 align-left">
                            <h6>{{ device.device_name }}: HWID ({{device.device_hwid}})</h6>
                        </div>
                        <div class="col-sm-2 col-xs-2 col-lg-2 align-right">
                            <button class="btn btn-info mx-2" @click="doEdit(key, device.id)">
                                <i class="fas fa-edit" aria-hidden="true"></i>
                            </button>

                            <button class="btn btn-secondary" @click="doDelete(key, device.id)">
                                <i class="fa fa-trash" aria-hidden="true"></i>
                            </button>
                            <!-- <ConfirmDialogue ref="confirmDialogue" /> -->
                        </div>
                    </div>
                </div>
                <!-- <div class="card-body">
                    <div class="row">
                        <div class="col-sm-2 col-xs-2 col-lg-2 "><img v-bind:src="device.device_type_image" style="width: 90px; border-radius: 10px; box-shadow:0 0 10px blueviolet; " /></div>
                        <div class="col-sm-8 col-xs-8 col-lg-8">
                            <h6 class="card-title text-info">{{device.device_type_name}}</h6>
                            <p class="card-text">{{device.device_type_desc}}</p>
                            <p class="card-text">{{device.device_hwid}}</p>
                        </div>
                        <div class="col-sm-2 col-xs-2 col-lg-2 "></div>
                    </div>
                </div> -->
            </div>
        </div>
    </div>

    <!-- <div v-if="compactView">
            <div class="row" v-for="(device, key) in devices" v-bind:key="key" v-bind:id="device.id">

                <div class="col-10">

                    <div class="card border-light">
                        <div>
                            <img v-bind:src="device.device_type_image" style="width: 100px; padding: 10px;" />
                        </div>
                        <div>
                            <h3 class="card-body">{{ device.device_name }} <span class="text-info">({{ device.id
                                    }})</span>
                                - {{ device.device_type_name }}
                            </h3>
                            <h6 class="card-subtitle text-muted">{{ (device.device_desc === "undefined")? "no
                                description" : device.device_desc}}</h6>
                            <p>{{ device.device_hwid || "no hardware address" }}</p>
                        </div>
                    </div>
                </div>
                <div class="col-2">
                    <button class="btn btn-info w-100" @click="doEdit(key, device.id)">
                        <i class="fas fa-edit" aria-hidden="true"></i>
                        Edit
                    </button>

                    <button class="btn btn-secondary  w-100" @click="doDelete(key, device.id)">
                        <i class="fa fa-trash" aria-hidden="true"></i>
                        Delete
                    </button>
                    <ConfirmDialogue ref="confirmDialogue" />

                </div>
            </div>
        </div>

    </div> -->


</template>

<script>
import ConfirmDialogue from '../components/ConfirmDialogue.vue';

import AddDevice from '../components/AddDevice.vue';
import DeviceTypesCombo from '../components/DeviceTypesCombo.vue';
import DeviceStringConstants from '../components/strings_constants/devices/index';
import MessagesConstants from '../components/strings_constants/messages';

    export default {
        components: { ConfirmDialogue, AddDevice, DeviceTypesCombo},

        data() {
            return {
                devices: [],
                deleteMsg: '',
                deleteModalResult: false,
                visible: true,
                compactView: true
            };
        },

        created() {
            this.getDevices();
            this.itemIndex = 0;
        },

        methods: {
            
            async doDelete(key, id) {
                
                const ok = await this.$refs.confirmDialogue.showDialogue({
                    title: DeviceStringConstants.DEVICE_DELETING_CAPTION,
                    message: DeviceStringConstants.DEVICE_DELETING_MESSAGE + this.devices[key].device_name + '?',
                    okButton: DeviceStringConstants.DEVICE_DELETING_CAPTION,
                })
                
                if (ok) {
                    axios.delete('/api/devices/delete/' + id)
                        .then(resp => {
                            this.devices.splice(key, 1);                            
                            console.log(key, id, " - deleted");
                            this.$root.$refs.toaster.setMessage(MessagesConstants.DELETED_MESSAGE, MessagesConstants.PROCESS_SUCCESSFULLY);
                        })
                        .catch(error => {
                            console.log(error);
                        })
                } else {
                    console.log(MessagesConstants.DELETING_CANCELLED);
                }
            },

            getDevices(api_url) {
                api_url = api_url || '/api/devices/read';
                fetch(api_url)
                    .then(response => response.json())
                    .then(response => {
                        this.devices = response.data;
                    })
                    .catch(err => console.log(err));
            },

            async setDeviceType($device_type_id, $item) {
                axios.get('/api/device_types/read/' + $device_type_id)
                    .then(resp_type => {
                        $item.device_type_image = resp_type['data'].data.device_type_image;
                        $item.device_type_name = resp_type['data'].data.device_type_name;
                    })
            },

            async setDevice() {
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
                    axios.post('/api/devices/create/?device_name=' +  this.$refs.addDevice.device_name +
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
                    console.log(DeviceMessagesConstants.DEVICE_INSERTING_CANCELLED);
                }

            },
            async doEdit(key, id) {
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
                    let editDevicePost = '/api/devices/update/'+id+
                        '/?device_name=' + this.$refs.addDevice.device_name +
                        '&device_type_id=' + this.$refs.addDevice.device_type_id + 
                        '&device_desc=' + this.$refs.addDevice.device_desc +
                        '&device_hwid=' + this.$refs.addDevice.device_hwid;
                    console.log(editDevicePost);

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
            ShowHide(isVisible) {
                this.visible = isVisible;
            },

            getVisible() {
                return this.visible;
            },
        },
        
    };
</script>

<style lang="scss" scoped>
    
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.3s;
    }
    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }
    
    .popup-modal {
        color: white;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 0.5rem;
        display: flex;
        align-items: center;
        z-index: 1;
    }
    
    .window {
        background: #6f42c1;
        border-radius: 5px;
        box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
        max-width: 480px;
        margin-left: auto;
        margin-right: auto;
        padding: 2.4rem;
    }

    .align-left {
        text-align: left !important;
    }

    .align-right {
        text-align: right !important;
    }
    .align-center {
        text-align: center !important;
    }

    .device-image {
        width: 70px;
        margin-top: -50px;
        margin-bottom: -60px;
        margin-left: -10px;
        border-radius: 10px;
        box-shadow: blueviolet 0px 0px 10px;    
    }
    
    @media only screen and (min-width : 320px) and (max-width : 480px) {
        .device-image {
            width: 50px;
            margin-top: -55px;
            margin-bottom: -29px;
            margin-left: -249px;
            border-radius: 10px;
            box-shadow: blueviolet 0px 0px 10px; 
        }
    }
    
</style>