<template>
        <input type="color" :value="color" @input="selectColor($event)"
        />
</template>

<script>
export default {

    props: {
        color: {
            type: String,
        }
    },

    emits: ['new-color'],

    data() {
        return {
            // color: undefined,

        }
    },

    methods: {
        selectColor() {
            this.$emit('new-color', event.target.value.toUpperCase())
            // console.log('qw ', event.target.value.toUpperCase())
        }
    }

}
</script>
