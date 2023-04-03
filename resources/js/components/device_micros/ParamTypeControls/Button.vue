<template>
    <div>
        <input type="button" class="btn btn-primary m-4"
            :class="sizeClass"
            :value="buttonCaption"
            :id="newID"
            @click="onClick"
        >
    </div>
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
