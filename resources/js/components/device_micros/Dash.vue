<template>
        <div style="margin-top: 5.5rem"></div>
<Color :initColor="'#AAeeAA'"></Color>
<Color :initColor="'#FFFFFF'"></Color>
<Color :initColor="'#777777'"></Color>
<Color :initColor="'#EEEEEE'"></Color>

<Range
    :rangeMin="0"
    :rangeMax="100"
    :initValue="50"
    :rangeCaption="'Zone1'"
>
</Range>
<Range
    :rangeMin="0"
    :rangeMax="100"
    :initValue="50"
    :rangeCaption="'Zone2'"
>
</Range>
<Range
    :rangeMin="0"
    :rangeMax="100"
    :initValue="50"
    :rangeCaption="'Zone3'"
>
</Range>
<Range
    :rangeMin="0"
    :rangeMax="100"
    :initValue="50"
    :rangeCaption="'Zone4'"
>
</Range>

<Switch
    :initSwitchState="true"
    :switchCaption="'Caption'"
></Switch>
<Switch
    :initSwitchState="true"
    :switchCaption="'Caption1'"
></Switch>
<Switch
    :initSwitchState="true"
    :switchCaption="'Caption2'"
></Switch>

<Button
    :buttonCaption="'Strip Off'"
    :sizeClass="'w-50'"
    @click="bntClick"
></Button>

</template>

<script>
import { def } from '@vue/shared';
import Color from './ParamTypeControls/Color.vue';
import Range from './ParamTypeControls/Range.vue';
import Switch from './ParamTypeControls/Switch.vue';
import Button from './ParamTypeControls/Button.vue';

export default {
    components: {Color, Range, Switch, Button},

    data() {
        return {

        }
    },

    methods: {
        bntClick() {
            console.log('click')
        }
    }

}

</script>
