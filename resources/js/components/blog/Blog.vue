<template>
    <div style="margin-top: 5.5rem"></div>

    <MasterSlaveLayout
        :layoutCaption="layoutCaption"
        :masterWidthProp="'w-25'"
        :slaveWidthProp="'w-75'"
    >

            <template v-slot:master>

                <CommonCard ref="calendarCard" :cardCaption="calendarBlockCaption">
                    <div class="w-100 text-center overlay-x-auto">
                        <DatePicker
                            v-model="calendarDate"
                            :attributes="calendarAttributes"
                        />
                    </div>
                </CommonCard>

            </template>


            <template v-slot:slave>

                <CommonCard ref="blogCard" :cardCaption="informationBlockCaption">
                <InfoCard v-for="(itemCard, key) in devBlogs"
                    :class="{
                                'text-bg-info': (key % 2),
                                'text-bg-success': !(key % 2),
                            }"
                    :key="key"
                    :infoCardCaption="itemCard.created_at"
                    :infoCardTitle="itemCard.dev_blog_name"
                    :infoCardText="itemCard.dev_blog_desc"
                    :infoCardMoreButtonCaption="itemCard.infoCardMoreButtonCaption"
                    :marginBottom="2"
                    :buttonVisible="itemCard.buttonVisible"

                >

                </InfoCard>
            </CommonCard>



            </template>


        </MasterSlaveLayout>



</template>

<script>

import MessagesConstants from '../strings_constants/strings'
import APIConstants from "../../api/rest_api";
import MasterSlaveLayout from "../../layouts/MasterSlaveLayout.vue";

export default {

    components: {
        MasterSlaveLayout,
    },

    data() {
        return {
            layoutCaption: 'Blog',
            informationBlockCaption: 'Blog list',
            calendarBlockCaption: 'Date',
            devBlogs: [],
            calendarDate: new Date(),

            calendarAttributes:
                [
                    {
                        highlight: true,
                        dates: [
                            new Date().setDate(new Date().getDate() - 1),
                            new Date()
                        ],
                    },
                ],
        }
    },

    created(){
        this.layoutCaption = MessagesConstants.BLOG ?? 'Blog';
        this.date = Date.now();
    },

    mounted() {
        this.getBlogData();
    },

    watch: {
        calendarDate() {
            this.onDateChange(this.calendarDate);
        }
    },

    methods: {
        async getBlogData() {
            try {
                const _data = await axios.get(APIConstants.api_dev_blogs_read);
                this.devBlogs = _data.data.data;
            } catch (error) {
                if (error.response?.status === 401) {
                    window.location.href = "/login"
                }
            }
        },

        onDateChange(e) {
            console.log(e.toLocaleDateString(e))
        }
    }
}

</script>

<style scoped lang="scss">

@import "../../../sass/calendar.scss";

.overlay-x-auto {
    overflow-x: auto;
}

</style>
