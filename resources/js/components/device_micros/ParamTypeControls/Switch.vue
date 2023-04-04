<template>
    <div class="form-check form-switch m-4">
        <label class="form-check-label switch-label" :for="newID">{{ switchCaption }}</label>
        <input class="form-check-input switch-big" style="width: 4rem;" type="checkbox" :id="newID" :checked="switchState">
    </div>
</template>

<script>

import MakeID from '../../../helpers/MakeID';

export default {

    props: {
        initSwitchState: {
            type: Boolean,
            default: false
        },

        switchCaption: {
            type: String,
            default: 'Caption'
        }
    },

    data() {
        return {
            switchState: false
        }
    },

    created() {
        this.newID = MakeID.makeId(8, 'switch_')
        this.switchState = this.initSwitchState
    }

}

</script>

<style scoped>

.switch-big
{
    width: 4rem;
    height: 35px;
}

.switch-label {
    font-size: 1.5rem;
    margin-left: 8px;
    margin-top: 2px;
}

</style>
