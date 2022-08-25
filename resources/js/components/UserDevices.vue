<template>
    <div v-if="visible">
        <h1>User Devices</h1>
        <div class="row">
            <div class="p-2 col-sm-4 col-xs-4 col-lg-4" v-for="user_device in user_devices" v-bind:key="user_device.id">
            <div class=" card border-light" style="min-width: 25%;">
                <h3 class="card-header">{{ user_device.device_name }}</h3>
                <div class="card-body">
                    <img v-bind:src="user_device.device_type_image">

                    <h5 class="card-title">{{ user_device.device_type_desc }}</h5>
                    <p>{{ user_device.device_type_name }}</p>
                    <p>{{ user_device.device_type_desc }}</p>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                user_devices: [],
                visible: false,
            };
        },

        created() {
            this.getUserDevices();
        },

        methods: {   
            getUserDevices(api_url) {
                api_url = api_url || '/api/user_devices/read/';
                fetch(api_url)
                    .then(response => response.json())
                    .then(response => {
                        this.user_devices = response.data;
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