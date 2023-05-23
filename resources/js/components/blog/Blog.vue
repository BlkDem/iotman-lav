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
                            @update:fromPage="onPageChange($event)"
                            :attributes="calendarAttributes"
                        />
                    </div>
                </CommonCard>

            </template>


            <template v-slot:slave>

                <CommonCard ref="blogCard" :cardCaption="informationBlockCaption">
                <InfoCard v-for="(itemCard, key) in devBlogs"
                    :class="{
                                // 'text-bg-info': (key % 2),
                                // 'text-bg-success': !(key % 2),
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
                <Paginator ref="refBlogPaginator"></Paginator>
            </CommonCard>



            </template>


        </MasterSlaveLayout>



</template>

<script>

import MessagesConstants from '../strings_constants/strings'
import APIConstants from "../../api/rest_api";
import MasterSlaveLayout from "../../layouts/MasterSlaveLayout.vue";
import Paginator from '../db/Paginator.vue';
import { errorEvent } from '../../api/errors';

export default {

    components: {
        MasterSlaveLayout,
        Paginator
    },

    data() {
        return {
            layoutCaption: 'Blog',
            informationBlockCaption: 'Blog list',
            calendarBlockCaption: 'Date',
            devBlogs: [],
            calendarDate: new Date(),

            currentMonth: '',
            currentYear: '',

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

        this.getBlogDays();
        this.getData();
    },

    watch: {
        calendarDate() {
            this.onDateChange(this.calendarDate);
        }
    },

    methods: {

        async getBlogDays(month) {
            try {
                const _data = await axios.get(APIConstants.api_dev_blog_days + month);
                // console.log(_data.data)
                this.calendarAttributes[0].dates = _data.data.data;
            } catch (error) {
                errorEvent(error)
            }
        },

        async getData(_currentPage=1, _itemsPerPage=50) {
            try {
                const _data = await axios.get(`${APIConstants.api_dev_blogs_read_page}${_currentPage}/${_itemsPerPage}`);

                // console.log(_data)
                this.devBlogs = _data.data.data;

                this.$refs.refBlogPaginator.setPaginator(
                            {
                                pagesCount: _data.data.paginator.PagesCount,
                                currentPage: _data.data.paginator.CurrentPage,
                                itemsPerPage: _data.data.paginator.ItemsPerPage,
                                recordsCount: _data.data.paginator.RecordsCount,
                                objectRef: this
                            }
                        )


            } catch (error) {
                errorEvent(error)
            }
        },

        onDateChange(e) {
            console.log(e.toLocaleDateString(e))
        },

        onPageChange(e) {
            console.log(e.month, e.year)
            this.currentMonth = e.month;
            this.currentYear = e.year;
            this.getBlogDays(e.month)
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
