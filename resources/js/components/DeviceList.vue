<template>
    <div>
        <div class="card border-light mt-2 mb-2" v-for="device in devices" v-bind:key="device.id">
            <h3 class="card-header">{{ device.device_name }}</h3>
            <div class="card-body ">
                <h5 class="card-title">{{ device.device_hwid }}</h5>
                <p class="card-text">{{ device.device_desc }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                devices: [],
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
            }
        },
        
    };
</script>