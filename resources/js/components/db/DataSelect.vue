<template>
    <select
        :value="value"
        :dataTableReadApi="dataTableReadApi"
        :nameField="nameField"
        :lookupField="lookupField"
        @change="doChange($event.target.value)"
        class="form-select">
        <option v-for="(item, key) in dataItems" :value="item.id">
            {{ item[nameField] }}
        </option>
    </select>

</template>

<script>

import APIConstants from "../../api/rest_api";

export default {

    data() {
        return {
            dataItems: [],
        }
    },

    emits: ['onDataSelect'],

    props: {
        id: {
            type: Number,
        },

        nameField: {
            type: String,
        },

        lookupField: {
            type: String,
        },

        value: {

        },

        dataTableReadApi: {
            type: String,
        }
    },

    created() {
        (async () => {
            const _data = await APIConstants.getData(this.dataTableReadApi)
            this.dataItems = _data.data.data
            console.log(this.value)
        })()
    },

    methods: {
        doChange(value) {
            this.$emit('onDataSelect', value, this.lookupField)
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
