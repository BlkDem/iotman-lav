<template>
    <div v-if="visible">
        <h1>Registered Devices</h1>
        <div class="row" >
            <div class="col-sm-4 col-xs-4 col-lg-4 p-2" v-for="(device, key) in devices" v-bind:key="key" v-bind:id="device.id">
                <div class="card border-light">
                    <h3 class="card-header">{{ device.device_name }} <span class="text-info">({{ device.id }})</span></h3>
                    <div class="card-body">
                        <h5 class="card-title text-info">{{ device.device_type_name }}</h5>
                        <h6 class="card-subtitle text-muted">{{ device.device_desc }}</h6>
                    </div>
                    <img v-bind:src="device.device_type_image"/>
                    <div class="card-body">                        
                        <p class="card-text">{{ device.device_desc }}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Hardware Address HWID: {{ device.device_hwid }}</li>
                    </ul>
                    <div class="card-body">
                        <div class="page">
                 <confirm-delete v-if="show" :msg="deleteMsg"></confirm-delete>
        <!-- person details -->
        <button @click="confirmDelete">
            <span class="glyphicon glyphicon-trash"></span>
        </button>
                        </div>
                 
                        
                        <a href="#" class="card-link" @click="deleteDevice(key, device.id)">Delete</a>
                        <a href="#" class="card-link" @click="confirmDelete(key, device.id)">Delete</a>
                         
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


    export default {
        name: 'page',
        components: {ConfirmDelete},

        data() {
            return {
                devices: [],
                show: false,
                deleteMsg: '',
                visible: false
            };
        },

        created() {
            this.getDevices();
            this.itemIndex = 0;
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
            },

            confirmDelete () {
                this.show = true;
                this.deleteMsg = 'Are you sure you want to delete this person?';
            },

            deleteDevice(key, id) {
                console.log(key, id);
                
                //this.$refs['my-modal'].show();
                if (confirm("Do you really want to delete?")) {
                    axios.delete('/api/devices/delete/' + id)
                        .then(resp => {
                            this.devices.splice(key, 1);
                            console.log(key, " - deleted");
                        })
                        .catch(error => {
                            console.log(error);
                        })
                }
            },
        },
        
    };
</script>