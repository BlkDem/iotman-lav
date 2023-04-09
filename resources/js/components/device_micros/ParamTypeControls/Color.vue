<template v-if="color">
        <div class="row">
            <div class="col-sm-4 col-md-4 col-lg-4 flex-center">
                <label class="mx-4 font-1_5rem"><span class="text-info"
                        :style="getStyle">{{ getHexColor(color) }}</span>
                </label>
            </div>
            <div class="col-sm-8 col-md-8 col-lg-8">
                <input type="color" class="form-control" :value="getHexColor(color)"
                    @input="onChange($event.target.value)" />
            </div>
        </div>
</template>

<script>

export default {

    emits: ['onChange'],

    props: {
        color: {
            type: String,
            default: '#333333',
        },

        param_name: {
            type: String,
            default: '',
        },

        param_desc: {
            type: String,
            default: '',
        },

        param_fullname: {
            type: String,
            default: '',
        },
    },

    emits: ['onChange'],

    data() {
        return {
        }
    },

    methods: {

        onChange(e) {
            console.log('component onChange: ', e)
            this.$emit('onChange', e, this.param_fullname)
        },

        getStyle() {
            if (this.color == null) return
            return 'color: ' + this.color + ';'
        },

        getHexColor(value) {
            const a = Number.parseInt(value)
            if (isNaN(a)) return

                // return HEX color like #AABBCC
                return '#' + a.toString(16).toUpperCase();
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
