<template>
    <div style="margin-top: 5.5rem"></div>

        <MasterSlaveLayout
            :layoutCaption="layoutCaption"
        >

            <template v-slot:master>

                <CommonCard
                    :cardCaption="deviceCaption"
                >
                    <h1>1</h1>
                </CommonCard>

            </template>

            <template v-slot:slave>

                <CommonCard
                    :cardCaption="parametersCaption"
                >
                    <h1>2</h1>
                </CommonCard>

            </template>


        </MasterSlaveLayout>

</template>

<script>
import MasterSlaveLayout from '../layouts/MasterSlaveLayout.vue';
import CommonCard from '../components/common/CommonCard.vue';
import MessagesConstants from '../components/strings_constants/strings';
import APIConstants from "../api/rest_api";

export default {
    components: {MasterSlaveLayout, CommonCard},

    data() {
        return {
            dataItems: "",

            layoutCaption: 'Device Micro Parameters',
            deviceCaption: 'Device',
            parametersCaption: 'Micro Parameters',

            deviceMicroId: {
                type: Number
            },

            deviceMicroInfoCaption: 'device micro caption'
        };
    },

    created() {
        this.deviceMicroId = this.$route.params.device_micro_id;
        console.log("device_micro_id: ", this.deviceMicroId);
        this.layoutCaption = MessagesConstants.DASH
        this.getData(this.deviceMicroId);
    },

    methods: {
        async getData(userId) {
            await axios.get(APIConstants.api_device_micro_dash + this.deviceMicroId)
                .then(response => {
                this.dataItems = response.data.data;
                console.log(this.dataItems);
            })
        }
    },
}


</script>
