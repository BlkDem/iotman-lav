<template>
    <div v-if="visible">
        <h1>User Devices</h1>
        <div class="row">
            <div class="p-2 col-sm-4 col-xs-4 col-lg-4" v-for="(user_device, key) in user_devices" v-bind:key="key" v-bind:id="user_device.id">
                <div class="card border-light">
                    <h3 class="card-header">{{ user_device.device_name }}</h3>
                    <div class="card-body">
                        <h5 class="card-title text-info">{{ user_device.device_type_name }}</h5>
                        <h6 class="card-subtitle text-muted">{{ user_device.device_desc }}</h6>
                    </div>
                    <img v-bind:src="user_device.device_type_image">
                    <div class="card-body">
                        <p class="card-text">{{ user_device.device_type_desc }}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Hardware Address HWID: {{ user_device.device_HWID }}</li>
                        <li class="list-group-item">User Device ID: {{ user_device.id }}</li>
                        <li class="list-group-item">Owner ID: {{ user_device.user_id }}</li>
                    </ul>
                    <div class="card-body">
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                    <div class="card-footer text-muted">
                        Cteated At: {{ user_device.created_at}}
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
                        //console.log(this.user_devices);
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