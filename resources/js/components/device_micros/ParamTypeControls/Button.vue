<template>
        <input type="button" class="btn btn-primary px-4 my-2"
            :class="sizeClass"
            :value="buttonCaption"
            :id="newID"
            @click="onClick"
        >
</template>

<script>

import MakeID from '../../../helpers/MakeID';

export default {
    props: {
        buttonCaption: {
            type: String,
            default: 'button'
        },

        sizeClass: {
            type: String,
            default: 'w-25'
        }
    },

    data(){
        return {

        }
    },

    created() {
        this.newID = MakeID.makeId(8, 'button_')
    },

    methods: {
        onClick() {
            console.log(event.target.value)
        }
    }
}

</script>
