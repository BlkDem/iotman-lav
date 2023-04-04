<template>
    <div class="row py-2">
        <div class="col-sm-3 col-md-3 col-lg-3">
            <label class="mx-4 font-1_5rem" :for="newID">{{ color }}
            </label>
        </div>
        <div class="col-sm-9 col-md-9 col-lg-9">
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
    height: 40px;
    padding: 0.5rem 0.5rem;
}

.font-1_5rem {
    font-size: 1.5rem;
}

</style>
