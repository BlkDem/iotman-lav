<template>
    <div style="margin-top: 5.5rem"></div>

        <MasterSlaveLayout
            :layoutCaption="layoutCaption"
            :master-width-prop="'w-25'"
            :slave-width-prop="'w-75'"
        >

            <template v-slot:master>

                <common-card :cardCaption="device.device_name">

                    <div class="mx-2">
                        <h5 class="flex-center my-2">{{ device.device_type_name }}</h5>
                        <img :src="getImage(device.device_type_image)" class="w-100 mb-4" />
                        <div class="w-100 mb-4">
                            <h6>Description:</h6>
                            <div>{{ device.device_type_desc }}</div>
                        </div>
                        <div class="w-100 mb-4">
                            <h6>Device Description:</h6>
                            <div>{{ device.device_desc }}</div>
                        </div>
                        <div class="w-100 mb-4" v-if="micro.device_micro_desc!=null">
                            <h6>Microcontroller:</h6>
                            <div>{{ micro.device_micro_desc }}</div>
                        </div>
                        <div class="w-100 mb-4">
                            <h6>Created:</h6>
                            <div>{{ micro.created_at }}</div>
                        </div>
                    </div>

                </common-card>

            </template>

            <template v-slot:slave>

                <common-card
                    :card-caption="parametersCaption"

                    :advanced-controls="advancedControls"

                    @on-advanced-control-click="onAdvancedControlClick"
                >
                <div class="flex-controls">
                    <div class="m-2" v-for="(param, key) in params" :key="key" :id="param.id">

                        <!-- <div class=""> -->
                            <div
                                :class="cardWidth"

                            >
                                <div v-if="param&&param.param_type_name==='COLOR'">
                                    <info-card
                                        :info-card-caption="param.param_name"
                                        :info-card-title="param.param_desc"
                                    >

                                        <color-control
                                            :param_name="param.param_name"
                                            :param_desc="param.param_desc ?? ''"
                                            :color="param.param_value"
                                            :param_fullname="param.param_fullname"
                                            @onChange="onColorChange"
                                        >
                                        </color-control>

                                    </info-card>
                                </div>

                                <div v-if="param&&param.param_type_name==='SIMPLE'">

                                    <info-card
                                        :info-card-caption="param.param_name"
                                        :info-card-title="param.param_desc"
                                    >

                                        <simple-control
                                            :param_value="param.param_value"
                                        >
                                        </simple-control>

                                    </info-card>

                                </div>

                                <div v-if="param&&param.param_type_name==='SWITCH'">

                                    <info-card
                                        :info-card-caption="param.param_name"
                                        :info-card-title="param.param_desc"
                                    >

                                        <switch-control
                                            :initSwitchCaption="param.param_name"
                                            :initSwitchState="(param.param_value === '1')?true:false"
                                            :param_fullname="param.param_fullname"
                                            @onChange="onSwitchChange"
                                        >
                                        </switch-control>

                                    </info-card>

                                </div>

                                <div v-if="param&&param.param_type_name==='BUTTON'">

                                    <info-card
                                        :info-card-caption="param.param_name"

                                    >

                                        <button-control
                                            :param_value="param.param_value"
                                            :param_fullname="param.param_fullname"
                                            :param_desc="param.param_desc"
                                            :class="'w-100'"
                                            @onClick="onButtonClick"
                                        >
                                        </button-control>

                                    </info-card>

                                </div>

                                <div v-if="param&&param.param_type_name==='RANGE'">
                                    <info-card
                                        :info-card-caption="param.param_name"
                                        :info-card-text="''"
                                    >

                                        <range-control
                                            :rangeCaption="param.param_name"
                                            :rangeMin="Number.parseInt(param.param_min)"
                                            :rangeMax="Number.parseInt(param.param_max)"
                                            :rangeValue="setRangeValue(param.param_value)"
                                            :param_fullname="param.param_fullname"
                                            @onChange="onRangeChange"
                                        >
                                        </range-control>

                                    </info-card>
                                </div>
                            </div>
                        <!-- </div> -->

                    </div>
                </div>

                </common-card>

            </template>


        </MasterSlaveLayout>

        <MyMqtt ref="mqttRef"
            :paramItems="params"
            @on-connect="mqttConnected"
            @on-message="onMessage"
        />

</template>

<script>
import MasterSlaveLayout from '../layouts/MasterSlaveLayout.vue';
import CommonCard from '../components/common/CommonCard.vue';
import MessagesConstants from '../components/strings_constants/strings';
import APIConstants from "../api/rest_api";
import ParsingErrors from "../helpers/ParsingErrors.js";
import Pathes from '../config/pathes';
import ColorControl from '../components/device_micros/ParamTypeControls/Color'
import SimpleControl from '../components/device_micros/ParamTypeControls/Simple'
import RangeControl from '../components/device_micros/ParamTypeControls/Range'
import SwitchControl from '../components/device_micros/ParamTypeControls/Switch'
import ButtonControl from '../components/device_micros/ParamTypeControls/Button.vue';
import MyMqtt from '../components/MyMqtt.vue';
import InfoCard from '../components/common/InfoCard.vue';

export default {
    components: {MasterSlaveLayout,
                CommonCard,
                ColorControl,
                SimpleControl,
                SwitchControl,
                RangeControl,
                ButtonControl,
                InfoCard,
                MyMqtt,
            },

    data() {
        return {

            //Device, controllers and params
            dataItems: "",

            device: Object, //dataItems.device
            micro: Object, //dataItems.micro
            params: [], //dataItems.params

            layoutCaption: 'Device Micro Parameters',
            deviceCaption: 'Device',
            parametersCaption: 'Micro Parameters',

            //Current controller ID
            deviceMicroId: {
                type: Number
            },

            deviceMicroInfoCaption: 'device micro caption',

            advancedControls: {

                //buttons for arrange the param cards size
                w100p: {
                    controlType: 'button',
                    controlActive: '',
                    controlCaption: 'Auto',
                    controlClass: 'w-100p'
                },
                small: {
                    controlType: 'button',
                    controlActive: 'btn-secondary',
                    controlCaption: '',
                    controlAwesomeIcon: 'fa-solid fa-table-cells',
                    controlClass: 'w-285px'
                },
                medium: {
                    controlType: 'button',
                    controlActive: '',
                    controlAwesomeIcon: 'fa-solid fa-table-cells-large',
                    controlCaption: '',
                    controlClass: 'w-350px'
                },
                large: {
                    controlType: 'button',
                    controlActive: '',
                    controlAwesomeIcon: 'fa-solid fa-list-ul',
                    controlCaption: '',
                    controlClass: 'w-640px'
                }
            },

            cardWidth: 'w-285px'

        }
    },

    created() {
        this.deviceMicroId = this.$route.params.device_micro_id;
        this.device.device_type_image = Pathes.storageImagePlugName;
        // console.log("device_micro_id: ", this.deviceMicroId);
        this.layoutCaption = MessagesConstants.DASH
        this.getData(this.deviceMicroId);
    },

    methods: {

        /* MQTT Controls Events */
        onAdvancedControlClick(control) {
            // console.log(control)
            this.cardWidth = control.controlClass ?? '';
            for (let item in this.advancedControls) this.advancedControls[item].controlActive = '';
            control.controlActive = 'btn-secondary';
        },

        onButtonClick(value, param_fullname, cmd) {
            this.$refs.mqttRef.doPublish(param_fullname, cmd);
            // console.log(value, param_fullname, cmd)
        },

        onRangeChange(value, param_fullname) {
            // console.log(value, param_fullname)
            this.$refs.mqttRef.doPublish(param_fullname, value);
        },

        onSwitchChange(value, param_fullname) {
            console.log(value, param_fullname)
            this.$refs.mqttRef.doPublish(param_fullname, value);
        },

        onColorChange(value, param_fullname) {
            // console.log(value, param_fullname)
            if (value === null) return;
            let a = '';
            if (value[0] === '#') {
                a = value.replace('#','');
            }
            const newValue = parseInt(a, 16);
            this.$refs.mqttRef.doPublish(param_fullname, newValue.toString());
        },


        setRangeValue(value) {
            if (value == null) return 0;

            const a = Number.parseInt(value);
            if (isNaN(a)) return 0;
            return a;
        },

        onMessage(topic, message) {
            for (let item in this.params) {
                if (this.params[item]['param_fullname'] === topic) {
                    this.params[item].param_value = message;
                }
            }
        },

        mqttConnected() {
            // console.log('mqtt connected')

        },

        async getData() {
            await axios.get(APIConstants.api_device_micro_dash + this.deviceMicroId)
                .then(response => {
                this.dataItems = response.data.data;

                this.device = this.dataItems.device;
                this.micro = this.dataItems.micro;
                this.params = this.dataItems.params;

            })

            .catch (error => {

                    console.log(error);

                    if (error.response.status === 401) {
                            window.location.href = "/login"
                    }

                    this.$root.$refs.toaster.showMessage(
                            MessagesConstants.DELETING_ERROR,
                            ParsingErrors.getError(error),
                            ParsingErrors.ERROR_LEVEL_ERROR
                    )

            })
        },

        getImage(imageName) {
            return Pathes.storageImagesPath + imageName;
        }
    },
}

</script>

<style scoped>
.flex-controls {
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.w-100p {
    width: 100%;
}
.w-285px{
    width: 280px;
}
.w-350px{
    width: 350px;
}
.w-640px{
    width: 640px;
}
</style>
