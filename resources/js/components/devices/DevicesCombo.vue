<template>
    <select v-model="id" class="form-select p-2">
        <option v-for="(item, key) in items" v-bind:key="key" v-bind:value="item.id">
            {{ item.device_name }}
        </option>
    </select>

</template>

<script>

import APIConstants from "../../rest_api";

export default {
    name: 'DeviceCombo',

    props: [
        "id"
    ],

    data (){
        return {
            items: [],
        }
    },

    created() {
        this.getDevices();
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
            return this.id;
        },
    },
}

</script>
