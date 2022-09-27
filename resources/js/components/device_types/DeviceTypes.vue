<template>
    <div v-if="visible">
        <AddDeviceType ref="addDeviceType"></AddDeviceType>
        <ConfirmDialogue ref="confirmDialogue" />
        <div class="row">
            <div class="col-sm-6 col-xs-6 col-lg-6 p-2">
                <h1  class="align-left px-4 pb-3" style='margin-top: 5rem;'>Device Types</h1>
            </div>
            <div class="col-sm-6 col-xs-6 col-lg-6 p-2" style="text-align: right !important;">
                <button class="btn btn-primary" @click="compactView=true">
                    <i class="fas fa-list"></i>
                </button>
                <button class="btn btn-primary m-2" @click="compactView=false">
                    <i class="fas fa-th-large"></i>
                </button>
                <button class="btn btn-primary" @click="setDeviceType">
                    Add Type
                </button>
            </div>
        </div>
        <div>
            <h4 class="text-primary">{{ page_description }}</h4>
        </div>

        <div class="row" v-if="!compactView">
            <div class="col-sm-4 col-xs-4 col-lg-4 p-2" v-for="(device_type, key) in device_types" v-bind:key="key"
                v-bind:id="device_type.id">
                <div class="card border-light">
                    <h3 class="card-header">{{ device_type.device_type_name }} <span class="text-info">({{ device_type.id }})</span>
                    </h3>
                    <div class="card-body">
                        <h5 class="card-title text-info">{{ device_type.device_type_name }}</h5>
                        <h6 class="card-subtitle text-muted">{{ (device_type.device_type_desc === "undefined")? MessagesConstants.NO_DESCRIPTION :
                            device_type.device_type_desc}}</h6>
                    </div>
                    <img v-bind:src="device_type.device_type_image" />
                   <div class="card-body">
                        <button class="btn btn-info" @click="doEditType(key, device_type.id)">
                            <i class="fas fa-edit" aria-hidden="true"></i>
                            Edit
                        </button>

                        <button class="btn btn-secondary" @click="doDeleteType(key, device_type.id)">
                            <i class="fa fa-trash" aria-hidden="true"></i>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- compact view -->
        <div v-if="compactView">
            <div class="card border-primary mb-4 w-100" v-for="(device_type, key) in device_types" v-bind:key="key"
                v-bind:id="device_type.id">
                <div class="card-header">
                    <div class="row">
                        <div class="col-sm-1 col-xs-1 col-lg-1 ">
                            <img v-bind:src="device_type.device_type_image" class="device-image" />
                        </div>
                        <div class="col-sm-3 col-xs-3 col-lg-3  align-left">
                            <h5>{{device_type.device_type_name}}<span class="text-info"> ({{ device_type.id}}) </span></h5>
                        </div>
                        <div class="col-sm-6 col-xs-4 col-lg-6 align-left">
                            <h6>{{ device_type.device_type_desc }}</h6>
                        </div>
                        <div class="col-sm-2 col-xs-2 col-lg-2 align-right">
                            <button class="btn btn-info mx-2" @click="doEditType(key, device_type.id)">
                                <i class="fas fa-edit" aria-hidden="true"></i>
                            </button>

                            <button class="btn btn-secondary" @click="doDeleteType(key, device_type.id)">
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

<script>
import ConfirmDialogue from '../../components/common/ConfirmDialogue.vue';
import AddDeviceType from './AddDeviceType.vue';
import Paginator from '../../components/common/Paginator.vue';
import MessagesConstants from '../../components/strings_constants/messages';
import DeviceTypeStringConstants from '../../components/strings_constants/device_types/index';

    export default {
        components: { ConfirmDialogue, AddDeviceType, Paginator},
        data() {
            return {
                device_types: [],
                visible: false,
                compactView: true,
            };
        },

        created() {
            this.page_description = DeviceTypeStringConstants.DEVICE_TYPE_PAGE_DESCRIPTION;
            this.getDeviceTypes();
        },

        methods: {   
            getDeviceTypes(api_url) {
                api_url = api_url || '/api/device_types/read/';
                fetch(api_url)
                    .then(response => response.json())
                    .then(response => {
                        this.device_types = response.data;
                    })
                    .catch(err => console.log(err));
            },

            async doDeleteType(key, id) {
                
                const ok = await this.$refs.confirmDialogue.showDialogue({
                    title: DeviceTypeStringConstants.DEVICE_TYPE_DELETING_CAPTION,
                    message: DeviceTypeStringConstants.DEVICE_TYPE_DELETING_MESSAGE + '"' + this.device_types[key].device_type_name + '"?',
                    okButton: DeviceTypeStringConstants.DEVICE_TYPE_DELETING_CAPTION,
                })
                
                if (ok) {
                    axios.delete('/api/device_types/delete/' + id)
                        .then(resp => {
                            this.device_types.splice(key, 1);                            
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

            async setDeviceType() {
                const _add = await this.$refs.addDeviceType.showDialogue({
                    edit_mode: false,
                    title: DeviceTypeStringConstants.DEVICE_TYPE_ADDING_TITLE,
                    message: DeviceTypeStringConstants.DEVICE_TYPE_ADDING_MESSAGE,
                    device_type_name: DeviceTypeStringConstants.DEVICE_TYPE_NAME_PLACEHOLDER,
                    device_type_desc: DeviceTypeStringConstants.DEVICE_TYPE_DESC_PLACEHOLDER,
                    device_type_image: DeviceTypeStringConstants.DEVICE_TYPE_IMAGE_PLACEHOLDER,
                    okButton: DeviceTypeStringConstants.DEVICE_TYPE_ADDBUTTON_CAPTION,
                })

                if (_add) {
                    axios.post('/api/device_types/create/?device_type_name=' +  this.$refs.addDeviceType.device_type_name +
                            '&device_type_image=' + this.$refs.addDeviceType.device_type_image + 
                            '&device_type_desc=' + this.$refs.addDeviceType.device_type_desc)
                        .then(resp => {
                            console.log(resp['data']);
                            let newDevice = {
                                device_type_name: resp['data'].device_type_name,
                                device_type_desc: resp['data'].device_type_desc,
                                device_type_image: resp['data'].device_type_image,
                                id: resp['data'].id
                            }   
                            this.device_types.push(newDevice);
                            this.$root.$refs.toaster.setMessage(MessagesConstants.ADDED_MESSAGE, MessagesConstants.PROCESS_SUCCESSFULLY);
                        })
                        .catch(error => {
                            console.log(error);
                        })
                } else {
                    console.log(MessagesConstants.INSERTING_CANCELLED);
                }

            },
            async doEditType(key, id) {
                const _edit = await this.$refs.addDeviceType.showDialogue({
                    edit_mode: true,
                    title: DeviceTypeStringConstants.DEVICE_TYPE_EDITING_TITLE,
                    message: DeviceTypeStringConstants.DEVICE_TYPE_EDITING_MESSAGE,
                    device_type_name: this.device_types[key].device_type_name,
                    device_type_desc: this.device_types[key].device_type_desc,
                    device_type_image: this.device_types[key].device_type_image,
                    okButton: DeviceTypeStringConstants.DEVICE_TYPE_EDITBUTTON_CAPTION,
                })

                if (_edit) {
                    let editDeviceTypePost = '/api/device_types/update/'+id+
                        '/?device_type_name=' + this.$refs.addDeviceType.device_type_name +
                        '&device_type_image=' + this.$refs.addDeviceType.device_type_image + 
                        '&device_type_desc=' + this.$refs.addDeviceType.device_type_desc;
                    console.log(editDeviceTypePost);

                    axios.put(editDeviceTypePost)
                        .then(resp => {
                            console.log(resp['data']);
                            this.device_types[key].device_type_name = resp['data'].device_type_name;
                            this.device_types[key].device_type_desc = resp['data'].device_type_desc;
                            this.device_types[key].device_type_image = resp['data'].device_type_image;
                            this.$root.$refs.toaster.setMessage(
                                MessagesConstants.EDITED_MESSAGE, 
                                MessagesConstants.PROCESS_SUCCESSFULLY
                            );
                        })
                        .then(resp => {
                            this.$root.$refs.DeviceRef.getDevices();
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
            }
        },
        
    };
</script>

<style lang="scss" scoped>

    //@import '../../../sass/lists.scss';
    //@import '../../../sass/aligns.scss';
    
</style>