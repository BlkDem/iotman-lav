<template>
    <div class="px-2 w-100">
        <div class="">
            <div class="flex-space font-1_5rem">
                <div class="text-info w-25">{{ rangeMin }}</div>
                <div class="text-info">{{ getValue(rangeValue) }}</div>
                <div class="text-info w-25 align-right">{{ rangeMax }}</div>
            </div>
            <input type="range" class="form-range" step="1" :min="rangeMin" :max="rangeMax"
                :value="getValue(rangeValue)"
                @change="onChange($event.target.value)"
                >
        </div>

    </div>
</template>

<script>

import InfoCard from '../../common/InfoCard.vue'

export default {

    components: {InfoCard},

    emits: ['onChange'],

    props: {
        // rangeMin: 0,
        // rangeMax: 0,

        // rangeValue: 0,

        rangeMin: {
            type: Number,
            defaut: 0
        },

        rangeMax: {
            type: Number,
            defaut: 0
        },

        rangeValue: {
            type: Number,
            defaut: 0
        },

        rangeCaption: {
            type: String,
            defaut: 'Caption'
        },

        param_fullname: {
            type: String,
            defaut: ''
        },

        // param_fullname: ''
    },

    data() {
        return {
        }
    },

    methods: {
        getValue(value){
            if (value === null) return
            const a = Number.parseInt(value)
            if (typeof(a) === NaN) return
            // console.log('r-num: ', a)
            return a
        },

        onChange(e) {
            this.$emit('onChange', e, this.param_fullname)
        }

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
    font-size: 1.3rem;
}
.font-1_5rem{
    font-size: 1.2rem;
}
.align-right {
    text-align: right;
}
</style>
