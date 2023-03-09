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
        selectColor(_a) {
            this.$emit('new-color', event.target.value)
            // console.log('qw ', event.target.value)
        }
    }

}
</script>
