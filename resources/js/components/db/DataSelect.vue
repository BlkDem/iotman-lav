<template>
    <select
        :value="value"
        :dataTableReadApi="dataTableReadApi"
        :nameField="nameField"
        :lookupField="lookupField"
        @change="doChange($event.target.value)"
        class="form-select">
        <option v-for="(item, key) in dataItems" :key="key" :value="item.id">
            {{ item[nameField] }}
        </option>
    </select>

</template>

<script>

import APIConstants from "../../api/rest_api";
import Repository from "../../api/repository"

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

    mounted() {
        this.getData();
    },

    methods: {

        async getData() {

            const response = await Repository.getData(this.dataTableReadApi)
            // console.log(response.data)
            this.dataItems = response.data

        },

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
