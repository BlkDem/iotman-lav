<template>
    <div v-if="visible">
        <h1>Devices</h1>
        <div class="row">
            <div class="col-sm-4 col-xs-4 col-lg-4 p-2" v-for="device in devices" v-bind:key="device.id">
                <div class="card border-light">
                    <h3 class="card-header">{{ device.device_name }} <span class="text-info">({{ device.id }})</span>
                    </h3>
                    <div class="card-body">
                        <img v-bind:src="device.device_type_image">

                        <h5 class="card-title">{{ device.device_hwid }}</h5>
                        <p class="card-text">{{ device.device_desc }}</p>

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
                devices: [],
                visible: true
            };
        },

        created() {
            this.getDevices();
        },

        methods: {
            
            getDevices(api_url) {
                api_url = api_url || '/api/devices/read';
                fetch(api_url)
                    .then(response => response.json())
                    .then(response => {
                        this.devices = response.data;
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