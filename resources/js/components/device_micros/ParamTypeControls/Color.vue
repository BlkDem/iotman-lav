<template v-if="color">
    <div  class="">
                <label :for="newID" class="font-1_5rem w-100 text-info text-center color-label">
                        {{ getHexColor(color) }}
                </label>
                <input type="color" :id="newID" class="form-control" :value="getHexColor(color)"
                    @input="onChange($event.target.value)" />
    </div>
</template>

<script>

import MakeID from '../../../helpers/MakeID'

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
            newID: ''
        }
    },

    created() {
        this.newID = MakeID.makeId(8, 'mqtt_color_')
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

.color-label{
    position: relative;
    display: block;
    text-shadow: 1px 1px 1px #333;
    margin-bottom: -30px;
}

input[type=color] {
    height: 36px;
    padding: 0.3rem 0.3rem;
    min-width: 150px;
}

.font-1_5rem {
    font-size: 1.0rem;
}

</style>
