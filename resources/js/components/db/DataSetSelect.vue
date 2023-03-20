<template>
    <select
        :value="value"
        :dataTableReadApi="dataTableReadApi"
        :nameField="nameField"
        :lookupField="lookupField"
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
            // value: undefined,
        }
    },

    emits: ['onDataSelect'],

    props: {
        id: {
            type: Number,
        },

        nameField: {
            type: String,
            // default: ''
        },

        lookupField: {
            type: String,
            // default: ''
        },

        value: {

        },

        dataTableReadApi: {
            type: String,
        }
    },

    created() {
        // console.log(this.value)
        (async () => {
            const _data = await APIConstants.getData(this.dataTableReadApi)
            this.dataItems = _data.data.data
            // this.retValue = this.modelValue
        })()
    },

    methods: {
        doChange(_value) {
            // this.lid = _value
            console.log(event)
            this.$emit('onDataSelect', _value, this.lookupField)
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
