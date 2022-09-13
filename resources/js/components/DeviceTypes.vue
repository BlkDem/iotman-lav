<template>
    <div v-if="visible">
        <AddDevice ref="addDeviceType"></AddDevice>
        <ConfirmDialogue ref="confirmDialogue" />
        <div class="row">
            <div class="col-sm-6 col-xs-6 col-lg-6 p-2">
                <h1>Device Types</h1>
            </div>
        </div>
        <div class="row">
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
    </div>
</template>

<script>
import ConfirmDialogue from '../components/ConfirmDialogue.vue';
import AddDeviceType from '../components/AddDeviceType.vue';

    export default {
        data() {
            return {
                device_types: [],
                visible: false,
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