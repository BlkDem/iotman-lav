<template>
    <select
        :value="value"
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

import APIConstants from "../../api/rest_api";

export default {

    data (){
        return {
            dataItems: [],
            value: undefined,
        }
    },

    emits: ['onDataSelect'],

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
            this.value = _value
            this.$emit('onDataSetSelect', _value)
        },

        getItems() {
            return this.dataItems;
        },

        getCurrentValue() {
            return this.value
        }
    },
}

</script>
