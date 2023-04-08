<template v-if="rangeValue">
    <div class="my-1 row px-2">
        <div class="col-sm-4 col-md-4 col-lg-4  flex-center">
            <label class="form-label mx-4 font-1_8rem">{{ rangeCaption }}
                <span class="text-info">({{ getValue(rangeValue) }})</span></label>
        </div>
        <div class="col-sm-8 col-md-8 col-lg-8">
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

export default {

    emits: ['rangeChange'],

    props: {
        rangeMin: 0,
        rangeMax: 0,

        rangeValue: 0,

        rangeCaption: {
            type: String,
            defaut: 'Caption'
        },

        param_fullname: ''
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
