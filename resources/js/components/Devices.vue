<template>
    <div v-if="visible">
        <h1>Registered Devices</h1>
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
                        <li class="list-group-item">Hardware Address HWID: {{ device.device_hwid }}</li>
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

    export default {
        components: { ConfirmDialogue },

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
                
                //this.confirmDialogue.show();
                console.log(this.devices);
                const ok = await this.$refs.confirmDialogue[key].showDialogue({
                    title: 'Delete Device',
                    message: 'Are you sure you want to delete this device - ' + this.devices[key].device_name + '?',
                    okButton: 'Delete',
                })
                
                if (ok) {
                    console.log('deleting ...- ', this.devices[key].device_name, this.devices[key].id);
                    axios.delete('/api/devices/delete/' + id)
                        .then(resp => {
                            this.devices.splice(key, 1);
                            console.log(key, id, " - deleted");
                        })
                        .catch(error => {
                            console.log(error);
                        })
                } else {
                    //alert('You chose not to delete this page. Doing nothing now.')
                    console.log('cancel');
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