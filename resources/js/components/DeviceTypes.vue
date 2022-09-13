<template>
    <div v-if="visible">
        <AddDeviceType ref="addDeviceType"></AddDeviceType>
        <ConfirmDialogue ref="confirmDialogue" />
        <div class="row">
            <div class="col-sm-6 col-xs-6 col-lg-6 p-2">
                <h1>Device Types</h1>
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
            <h4 class="text-primary">Device Types - things produced by Umolab</h4>
        </div>

        <div class="row" v-if="!compactView">
            <div class="col-sm-4 col-xs-4 col-lg-4 p-2" v-for="(device_type, key) in device_types" v-bind:key="key"
                v-bind:id="device_type.id">
                <div class="card border-light">
                    <h3 class="card-header">{{ device_type.device_type_name }} <span class="text-info">({{ device_type.id }})</span>
                    </h3>
                    <div class="card-body">
                        <h5 class="card-title text-info">{{ device_type.device_type_name }}</h5>
                        <h6 class="card-subtitle text-muted">{{ (device_type.device_type_desc === "undefined")? "no description" :
                            device_type.device_type_desc}}</h6>
                    </div>
                    <img v-bind:src="device_type.device_type_image" />
                   <div class="card-body">
                        <button class="btn btn-info" @click="doEdit(key, device_type.id)">
                            <i class="fas fa-edit" aria-hidden="true"></i>
                            Edit
                        </button>

                        <button class="btn btn-secondary" @click="doDelete(key, device_type.id)">
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
                            <button class="btn btn-info mx-2" @click="doEdit(key, device_type.id)">
                                <i class="fas fa-edit" aria-hidden="true"></i>
                            </button>

                            <button class="btn btn-secondary" @click="doDelete(key, device_type.id)">
                                <i class="fa fa-trash" aria-hidden="true"></i>
                            </button>
                            <!-- <ConfirmDialogue ref="confirmDialogue" /> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Paginator ref="paginatorDevices"></Paginator>
    </div>

        <!-- <div class="row">
            <div class="col-sm-6 col-xs-6 col-lg-6 p-2"  v-for="device_type in device_types" v-bind:key="device_type.id">
            <div class="card border-light" style="min-width: 25%;">
                <h3 class="card-header">{{ device_type.device_type_name }}</h3>
                <div class="card-body">
                    <img v-bind:src="device_type.device_type_image">

                    <h5 class="card-title">{{ device_type.device_type_desc }}</h5>

                </div>
            </div>
            </div>
        </div>
    </div> -->
</template>

<script>
import ConfirmDialogue from '../components/ConfirmDialogue.vue';
import AddDeviceType from '../components/AddDeviceType.vue';
import Paginator from '../components/Paginator.vue';

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