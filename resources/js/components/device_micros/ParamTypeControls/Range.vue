<template>

    <div class="p-2 my-2 row">
        <div class="col-sm-4 col-md-4 col-lg-4">
            <label :for="newID" class="form-label mx-4 font-1_8rem">{{ rangeCaption }}
                <span class="text-info">({{ rangeValue }})</span></label>
        </div>
        <div class="col-sm-8 col-md-8 col-lg-8">
            <div class="flex-space font-1_5rem">
                <div class="text-info w-25">{{ rangeMin }}</div>
                <div class="text-info">{{ rangeValue }}</div>
                <div class="text-info w-25 align-right">{{ rangeMax }}</div>
            </div>
            <input type="range" class="form-range" step="1" :id="newID" :min="rangeMin" :max="rangeMax"
                v-model="rangeValue">
        </div>

    </div>

</template>

<script>

import MakeID from '../../../helpers/MakeID'

export default {
    props: {
        rangeMin: {
            type: Number,
            defaut: 0
        },

        rangeMax: {
            type: Number,
            defaut: 100
        },

        initValue: {
            type: Number,
            defaut: 50
        },

        rangeCaption: {
            type: String,
            defaut: 'Caption'
        }
    },

    data() {
        return {
            rangeValue: 0,
            newID: undefined
        }
    },

    created() {
        this.rangeValue = this.initValue
        this.newID = MakeID.makeId(8, 'range_')
    }
}

</script>

<style scoped>
.flex-space {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.font-1_8rem{
    font-size: 1.5rem;
}
.font-1_5rem{
    font-size: 1.2rem;
}
.align-right {
    text-align: right;
}
</style>
