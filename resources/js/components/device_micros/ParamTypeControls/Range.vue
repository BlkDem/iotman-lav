<template>
    <div class="px-2 w-100">
        <!-- <div class=""> -->
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

    <!-- </div> -->
</template>

<script>

import InfoCard from '../../common/InfoCard.vue'

export default {

    components: {InfoCard},

    emits: ['onChange'],

    props: {

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

    },

    data() {
        return {
        }
    },

    methods: {
        getValue(value){
            if (value === null) return
            const a_value = Number.parseInt(value)
            if (isNaN(a_value)) return
            return a_value
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
