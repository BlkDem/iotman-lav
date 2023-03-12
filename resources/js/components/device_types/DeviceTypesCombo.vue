<template>
    <select :value="id" class="form-select p-2" @change="setDeviceTypeID($event.target.value)">
        <option v-for="(item, key) in items" v-bind:key="key" v-bind:value="item.id">
            {{ item.device_type_name }}
        </option>
    </select>

</template>

<script>

import { isIntegerKey } from "@vue/shared";
import APIConstants from "../../api/rest_api";

export default {
    name: 'DeviceTypeCombo',

    props: {
      id: {
        required: true
      }
    },

    data (){
        return {
            items: [],
            combo_value: "",
            device_type_id: ""
        }
    },

    created() {
        this.getDeviceTypes();
        this.device_type_id = this.id
    },

    mounted() {
        console.log(this)
    },

    computed: {
        // id: function () {
        //     console.log(this.id)
        // return this.id;
        // }
    },

    watch: {
            combo_value: function () {
                // handler: console.log(this., this.id)
            }
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
            return this.device_type_id;
        },

        setDeviceTypeID($id) {
            console.log($id)
            this.device_type_id = $id
        },
    },
}

</script>
