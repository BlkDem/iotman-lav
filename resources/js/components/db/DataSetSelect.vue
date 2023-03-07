<template>
    <select v-bind="id" @change="setKeyID($event.target.value)" class="form-select">
        <option v-for="(item, key) in dataItems" v-bind:key="key" v-bind:value="item.id">
            {{ item[nameField] }}
        </option>
    </select>

</template>

<script>

import DeviceTypeData from "../../api/dsDeviceType";

export default {

    data (){
        return {
            modelValue: undefined,
            dataItems: []
        }
    },

    props: {
        id: {
            type: Number,
        },
        items: {
            type: Array,
        },
        nameField: {
            type: String,
            default: 'device_type_name'
        },
        dataTable: {
            type: String,
        }
    },

    created() {
        const a = async () => {
            const _data = await DeviceTypeData.getGeviceTypeData()
             this.dataItems = _data.data.data
             console.log('asyc', _data.data.data)

            // console.log(await DeviceTypeData.getGeviceTypeData())
        }
        console.log('sync', a())
    },

    methods: {
        setKeyID(_value) {
            this.modelValue = _value
            console.log(_value)
        }
    },
}

</script>
