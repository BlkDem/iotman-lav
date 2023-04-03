<template>

    <div>
        <label for="Range" class="form-label">{{ rangeValue }}</label>
        <input type="range" class="form-range" step="1" id="Range"
            :min="rangeMin"
            :max="rangeMax"
            v-model="rangeValue"
        >
    </div>

</template>

<script>

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
            defaut: 0
        }
    },

    data() {
        return {
            rangeValue: 0,

        }
    },

    created() {
        this.rangeValue = this.initValue
    }
}

</script>
