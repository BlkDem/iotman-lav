<template>
    <select
        :dataTableReadApi="dataTableReadApi"
        :nameField="nameField"
        @change="doChange($event.target.value)"
        class="form-select">
        <option v-for="(item, key) in dataItems" v-bind:key="key" v-bind:value="item.id">
            {{ item[nameField] }}
        </option>
    </select>

</template>

<script>

// import DeviceTypeData from "../../api/dsDeviceType";
import APIConstants from "../../rest_api.js";

export default {

    data (){
        return {
            // retValue: undefined,
            dataItems: []
        }
    },

    emits: ['MySelect'],

    props: {
        id: {
            type: Number,
        },

        nameField: {
            type: String,
            default: 'device_type_name'
        },
        dataTableReadApi: {
            type: String,
        }
    },

    created() {
        (async () => {
            const _data = await APIConstants.getData(this.dataTableReadApi)
            this.dataItems = _data.data.data
            this.retValue = this.modelValue
        })()
    },

    methods: {
        doChange(_value) {
            this.$emit('MySelect', _value)
            // console.log(_value)
        },

        getItems() {
            return this.dataItems;
        }
    },
}

</script>
