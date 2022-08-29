<template>
    <Toaster ref="toaster"></Toaster>
    <div v-if="visible">
        <AddDevice ref="addDevice"></AddDevice>
        <div class="row">
            <div class="col-sm-4 col-xs-4 col-lg-4 p-2">
                <h1>Registered Devices</h1>
            </div>
            <div class="col-sm-4 col-xs-4 col-lg-4 p-2"></div>
            <div class="col-sm-4 col-xs-4 col-lg-4 p-2"><button class="btn btn-primary btn-block" @click="setDevice">Add
                    Device</button></div>
        </div>

        <div class="row">
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
                    <div class="card-body">
                        <p class="card-text">{{ device.device_desc }}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">HWID: {{ device.device_hwid }}</li>
                    </ul>
                    <div class="card-body">
                        <button class="btn btn-secondary" @click="doDelete(key, device.id)">
                            <i class="fa fa-trash" aria-hidden="true"></i>
                            Delete
                        </button>
                        <ConfirmDialogue ref="confirmDialogue" />
                        
                    </div>
                </div>
            </div>

        </div>
    </div>


</template>

<script>
import ConfirmDialogue from '../components/ConfirmDialogue.vue';
import Toaster from '../components/Toaster.vue';
import AddDevice from '../components/AddDevice.vue';
import ConfirmDeleteDeviceConstants from '../components/strings_constants/index';

    export default {
        components: { ConfirmDialogue, Toaster , AddDevice},

        data() {
            return {
                devices: [],
                deleteMsg: '',
                deleteModalResult: false,
                visible: false
            };
        },

        created() {
            this.getDevices();
            this.itemIndex = 0;
        },

        methods: {
            
            async doDelete(key, id) {
                
                const ok = await this.$refs.confirmDialogue[key].showDialogue({
                    title: ConfirmDeleteDeviceConstants.DEVICE_DELETING_CAPTION,
                    message: ConfirmDeleteDeviceConstants.DEVICE_DELETING_MESSAGE + this.devices[key].device_name + '?',
                    okButton: ConfirmDeleteDeviceConstants.DEVICE_DELETING_CAPTION,
                })
                
                if (ok) {
                    console.log('deleting ...- ', this.devices[key].device_name, this.devices[key].id);
                    axios.delete('/api/devices/delete/' + id)
                        .then(resp => {
                            this.devices.splice(key, 1);                            
                            console.log(key, id, " - deleted");
                            this.$refs.toaster.setMessage("Device Deleted", "Successfully");
                        })
                        .catch(error => {
                            console.log(error);
                        })
                } else {
                    console.log('delete canceled');
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

            async setDevice() {
                const _add = await this.$refs.addDevice.showDialogue({
                    title: 'Adding Device',
                    message: 'Adding Device',
                    new_device_name: 'dname',
                    new_device_desc: 'dtype',
                    mew_device_type_id: 'type_id',
                    okButton: 'Add',
                })

                if (_add) {
                    console.log(this.$refs.addDevice)
                    let newDevicePost = 'devices/create/?device_name=' + this.$refs.addDevice.device_name
                         + '&device_type_id=' + this.$refs.addDevice.device_type_id + '&device_desc=' + this.$refs.addDevice.device_desc;
                    console.log(newDevicePost);
                    
                    axios.post(newDevicePost)
                        .then(resp => {
                            //this.devices.splice(key, 1);                            
                            
                            console.log(resp);
                            //this.$refs.toaster.setMessage("Device Deleted", "Successfully");
                        })
                        .catch(error => {
                            console.log(error);
                        })
                } else {
                    console.log('inserting canceled');
                }

                /*this.$refs.toaster.setMessage("Adding Device", "Successfully");
                let newDevice = {device_name: 'New Device 1', device_desc: 'new desc' , device_type_id: '2'};
                this.devices.push(newDevice); // what to push unto the rows array?*/
                //api_url = api_url || '/api/devices/read';
                /*fetch(api_url)
                    .then(response => response.json())
                    .then(response => {
                        this.devices = response.data;
                    })
                    .catch(err => console.log(err));*/
            },

            ShowHide(isVisible) {
                this.visible = isVisible;
            },

            getVisible() {
                return this.visible;
            },

            deleteDevice(key, id) {
                console.log(key, id);

                console.log(deleteModalResult);

                /*$('#deleteConfirmationModal').on('hidden.bs.modal', function (e) {
                    console.log(e);
                }).one(console.log('one'));

                if (confirm("Do you really want to delete?")) {
                    axios.delete('/api/devices/delete/' + id)
                        .then(resp => {
                            this.devices.splice(key, 1);
                            console.log(key, " - deleted");
                        })
                        .catch(error => {
                            console.log(error);
                        })
                }*/
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
        padding: 1rem;
    }
    
    </style>