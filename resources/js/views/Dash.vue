<template>
    <div style="margin-top: 5.5rem"></div>

        <MasterSlaveLayout
            :layoutCaption="layoutCaption"
        >

            <template v-slot:master>

                <CommonCard :cardCaption="device.device_name">

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
                </CommonCard>

            </template>

            <template v-slot:slave>

                <CommonCard
                    :cardCaption="parametersCaption"
                >
                    <div class="m-2" v-for="(param, key) in params" :key="param.id" :id="param.id">

                        <div class="row">
                            <div class="w-100">
                                <div v-if="param.param_type_name==='COLOR'">
                                    <color-control
                                        :initColor="'#FF7700'"
                                    >
                                    </color-control>
                                </div>
                                <div v-if="param.param_type_name==='SIMPLE'">
                                    <simple-control
                                        :param_name="param.param_name"
                                        :param_value="param.param_value"
                                    >
                                    </simple-control>
                                </div>
                                <div v-if="param.param_type_name==='RANGE'">
                                    <range-control
                                        :rangeCaption="param.param_name"
                                        :rangeMin="Number.parseInt(param.param_min ?? 0)"
                                        :rangeMax="Number.parseInt(param.param_max ?? 100)"
                                        :initValue="Number.parseInt(param.param_value ?? 50)"
                                    >
                                    </range-control>
                                </div>
                            </div>
                        </div>

                    </div>

                </CommonCard>

            </template>


        </MasterSlaveLayout>

        <MyMqtt
            @on-connect="mqttConnected"
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
import MyMqtt from '../components/MyMqtt.vue';

export default {
    components: {MasterSlaveLayout, CommonCard, ColorControl, SimpleControl, RangeControl, MyMqtt},

    data() {
        return {
            dataItems: "",

            device: Object,
            micro: Object,
            params: [],

            layoutCaption: 'Device Micro Parameters',
            deviceCaption: 'Device',
            parametersCaption: 'Micro Parameters',

            deviceMicroId: {
                type: Number
            },

            deviceMicroInfoCaption: 'device micro caption',

        }
    },

    created() {
        this.deviceMicroId = this.$route.params.device_micro_id;
        this.device.device_type_image = Pathes.storageImagePlugName
        console.log("device_micro_id: ", this.deviceMicroId);
        this.layoutCaption = MessagesConstants.DASH
        this.getData(this.deviceMicroId);
    },

    methods: {

        mqttConnected() {
            console.log('mqtt connected')
        },

        async getData() {
            await axios.get(APIConstants.api_device_micro_dash + this.deviceMicroId)
                .then(response => {
                this.dataItems = response.data.data;
                this.device = this.dataItems.device
                this.micro = this.dataItems.micro
                this.params = this.dataItems.params

                console.log(this.params, this.device, this.micro);
            })

            .catch (error => {

                    console.log(error);
                    this.$root.$refs.toaster.showMessage(
                            MessagesConstants.DELETING_ERROR,
                            ParsingErrors.getError(error),
                            ParsingErrors.ERROR_LEVEL_ERROR
                    )

            })
        },

        getImage(imageName) {
            return Pathes.storageImagesPath + imageName
        }
    },
}


</script>
