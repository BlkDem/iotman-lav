<template>
    <div class="min-width-150px mx-2">
        <div class="form-check form-switch m-1">
            <label class="form-check-label switch-label" :for="newID">{{ switchCaption }}</label>
            <input class="form-check-input switch-big" style="width: 4rem;" type="checkbox"
                v-model="switchState"
                :id="newID"
                @change="onChange($event.target.checked)">
        </div>
    </div>
</template>

<script>

import MakeID from '../../../helpers/MakeID';

export default {

    emits: ['onChange'],

    props: {
        initSwitchState: {
            type: Boolean,
            default: false,
        },

        param_fullname: {
            type: String,
            default: '',
        },

        initSwitchCaption: {
            type: String,
            default: 'Caption'
        }
    },

    data() {
        return {
            switchState: false,
        }
    },

    created() {
        this.newID = MakeID.makeId(8, 'switch_')
    },

    mounted() {
        // console.log('checked', this.initSwitchState)
        setInterval(()=> {
            this.switchState = this.initSwitchState
        }, 50)
    },

    computed: {
        switchCaption() {
            return (this.switchState)?'On':'Off';
        }
    },

    methods: {
        onChange(e) {
            // console.log('switch')
            const value = (e)?1:0;

            this.$emit('onChange', value.toString(), this.param_fullname)
        }
    }

}

</script>

<style scoped>

.switch-big
{
    width: 3rem;
    height: 30px;
}

.switch-label {
    font-size: 1.4rem;
    margin-left: 8px;
    margin-top: 1px;
    height: 30px;
}

.min-width-150px {
    min-width: 150px;
}

</style>
