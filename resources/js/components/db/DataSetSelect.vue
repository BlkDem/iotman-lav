<template>
    <select v-bind="id" @change="setId($event.target.value)" class="form-select">
        <option v-for="(item, key) in items" v-bind:key="key" v-bind:value="item.id">
            {{ item.name }}
        </option>
    </select>

</template>

<script>

export default {

    data (){
        return {
            items: [],
            //id: undefined,
        }
    },

    props: {
        id: {
            type: Number,
        },
        items: {
            type: Array,
        }
    },

    created() {
    },

    methods: {
        setId(_value) {
            this.id = _value
        }
    },
}

</script>
