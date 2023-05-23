<template>
    <div class="min-width-150px">
        <input type="button" class="btn btn-primary btn-sm px-4 my-2"
            :class="sizeClass"
            :value="param_desc"
            @click="onClick($event.target.value)"
        >
    </div>
</template>

<script>

export default {

    emits: ['onClick'],

    props: {
        buttonCaption: {
            type: String,
            default: 'button'
        },

        sizeClass: {
            type: String,
            default: 'w-100'
        },

        param_name: '',
        param_value: '',
        param_desc: '',
        param_fullname: '',

    },

    data(){
        return {

        }
    },

    created() {
        // this.newID = MakeID.makeId(8, 'button_')
    },

    methods: {
        onClick(e) {
            console.log(this.param_fullname, this.param_value)
            this.$emit('onClick', e, this.param_fullname, this.param_value)
        }
    }
}

</script>

<style scoped>

.min-width-150px {
    min-width: 150px;
}
</style>
