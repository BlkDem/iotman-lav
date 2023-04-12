<template>
    <h1 class="align-left px-4 pb-1" style="margin-top: 5.5rem">
        <!-- {{ pageCaption }} -->
    </h1>


    <ThreeColumnLayout
        :layoutCaption="pageCaption"
    >

            <template v-slot:first>

                <CommonCard ref="menuCard"
                :cardCaption="menuBlockCaption"
                :margins="margins">
                <AppMenu ref="homeAppMenu" :margins="margins" :isDropdowns="false"></AppMenu>
                </CommonCard>

            </template>

            <template v-slot:middle>

            <CommonCard ref="menuCard" :cardCaption="informationBlockCaption">
                <InfoCard v-for="(itemCard, key) in devBlogs"
                    :class="{
                                'bg-info': key % 2 === 0,
                                'bg-success': key % 2 === 1,
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

            <template v-slot:last>

        <!-- messages -->
            <CommonCard ref="logCard" :cardCaption="logBlockCaption">
                        <div class="card text-white mb-3"
                            :class="{
                                'bg-alert': logRecord.log_level=='1',
                                'bg-error': logRecord.log_level=='2',
                            }"
                            v-for="(logRecord, key) in logRecords" :key="key" :id="key">
                            <div class="card-header"> {{ logRecord.created_at }}</div>
                            <div class="card-body">
                                <h5 class="card-title">{{ logRecord.log_category }}</h5>
                                <p class="card-text">{{ getLogPretty(logRecord.log_data) }}</p>
                            </div>
                        </div>
            </CommonCard>


            </template>


    </ThreeColumnLayout>

</template>

<script>
import APIConstants from "../api/rest_api";
import MessagesConstants from "../components/strings_constants/strings.js";
import ThreeColumnLayout from "../layouts/ThreeColumnLayout.vue";
// import Field from "../helpers/test";
// import { marked } from 'marked';

export default {
    name: 'Home',

    components: {ThreeColumnLayout},

    data() {

        return {
            pageCaption: undefined,
            menuBlockCaption: undefined,
            informationBlockCaption: undefined,
            logBlockCaption: undefined,
            margins: 2,

            devBlogs: [],

            logRecords: [],
        }
    },

    created() {

        this.pageCaption = MessagesConstants.HOME ?? 'Umolab Devices';
        this.menuBlockCaption = MessagesConstants.menuBlockCaption ?? 'Menu';
        this.informationBlockCaption = MessagesConstants.informationBlockCaption ?? 'Information';
        this.logBlockCaption = MessagesConstants.logBlockCaption ?? 'Log';

        this.getBlogData();

        setInterval(() => {
            this.getLogData();
        }, 5000)

        this.getLogData();

    },

    mounted() {

        this.emitter.on("new-lang", _lang => {
            this.setLang(_lang);
        });
    },

    methods: {

        getLogPretty(data) {

            const jsonObj = JSON.parse(data);
            if (typeof jsonObj === 'object') {
                const {idx, fieldExt, payload} = jsonObj;
                return '/' + idx + '/' + fieldExt + ' => ' + payload;
            }
            return 'Undefined Data';

        },

        async getBlogData() {
            const _data = await axios.get(APIConstants.api_dev_blogs_read);
            this.devBlogs = _data.data.data;
        },

        async getLogData() {
            const _data = await axios.get(APIConstants.api_logs_read_page + '1/3');
            this.logRecords = _data.data.data
        },

        setLang(_lang) {
            this.pageCaption = _lang.HOME ?? 'Welcome';
            this.menuBlockCaption = _lang.menuBlockCaption ?? 'Menu';
            this.informationBlockCaption = _lang.informationBlockCaption ?? 'Information';
            this.logBlockCaption = _lang.logBlockCaption ?? 'Log';
        },

    },

}
</script>
