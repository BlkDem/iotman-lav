<template>
    <div class="row py-1">
        <div class="col-sm-4 col-md-4 col-lg-4 flex-center">
            <label class="mx-4 font-1_5rem" :for="newID">{{ color }}
            </label>
        </div>
        <div class="col-sm-8 col-md-8 col-lg-8">
            <input type="color" class="form-control"
                :value="color"
                :id="newID"
                @input="selectColor($event)"
            />
        </div>
    </div>
</template>

<script>

import MakeID from '../../../helpers/MakeID';

export default {

    props: {
        initColor: {
            type: String,
        }
    },

    emits: ['new-color'],

    data() {
        return {
            color: undefined,
            newID: undefined
        }
    },

    created() {
        this.color = this.initColor.toUpperCase()
        this.newID = MakeID.makeId(8, 'color_')
    },

    methods: {
        selectColor() {
            this.color = event.target.value.toUpperCase()
            this.$emit('new-color', this.color)
        }
    }

}
</script>

<style scoped>

input[type=color] {
    height: 36px;
    padding: 0.3rem 0.3rem;
}

.font-1_5rem {
    font-size: 1.3rem;
}

</style>
