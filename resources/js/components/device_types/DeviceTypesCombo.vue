<template>
    <select v-model="id" class="form-select p-2">
        <option v-for="(item, key) in items" v-bind:key="key" v-bind:value="item.id">
            {{ item.device_type_name }}
        </option>
    </select>

</template>

<script>

import APIConstants from "../../rest_api";

export default {
    name: 'DeviceTypeCombo',

    props: [
        "id"
    ],

    data (){
        return {
            items: [],
        }
    },

    created() {
        this.getDeviceTypes();
    },

    methods: {
        async getDeviceTypes() {
             await fetch(APIConstants.api_device_types_read)
                    .then(response => response.json())
                    .then(response => {
                        this.items = response.data;
                    })
                    .catch(err => console.log(err));
        },

        getDeviceTypeID() {
            return this.id;
        },
    },
}

</script>
