<template>
    <select :value="id" class="form-select p-2" @change="setDeviceID($event.target.value)">
        <option v-for="(item, key) in items" v-bind:key="key" v-bind:value="item.id">
            {{ item.device_name }}
        </option>
    </select>

</template>

<script>

import APIConstants from "../../api/rest_api";

export default {
    name: 'DeviceCombo',

    props: [
        "id"
    ],

    data (){
        return {
            items: [],
            device_id: ""
        }
    },

    created() {
        this.getDevices();
        this.device_id = this.id
    },

    methods: {
        async getDevices() {
             await fetch(APIConstants.api_devices_read)
                    .then(response => response.json())
                    .then(response => {
                        this.items = response.data;

                    })
                    .catch(err => console.log(err));
        },

        getDeviceID() {
            return this.device_id;
        },

        setDeviceID($id) {
                console.log($id)
                this.device_id = $id
        },
    },
}

</script>
