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
                <TransitionGroup name="list" tag="div">
                    <InfoCard v-for="(itemCard, index) in devBlogs"
                        :class="{
                            'text-bg-info': index % 2 === 0,
                            'text-bg-success': index % 2 === 1,
                        }"
                        :key="itemCard.id"
                        :infoCardCaption="itemCard.created_at"
                        :infoCardTitle="itemCard.dev_blog_name"
                        :infoCardText="itemCard.dev_blog_desc"
                        :infoCardMoreButtonCaption="itemCard.infoCardMoreButtonCaption"
                        :marginBottom="2"
                        :buttonVisible="itemCard.buttonVisible"
                        :moreVisible="(index < 3)?true:false"
                        >

                    </InfoCard>
                </TransitionGroup>
            </CommonCard>

            </template>

            <template v-slot:last>

        <!-- messages -->
            <CommonCard ref="logCard" :cardCaption="logBlockCaption">
                <TransitionGroup name="list" tag="div">
                    <div class="card mb-3"
                        :class="{
                                    'text-bg-warning': logRecord.log_level=='1',
                                    'text-bg-danger': logRecord.log_level=='2',
                                }"
                        v-for="(logRecord) in logRecords" :key="logRecord.id" :id="logRecord.id">
                        <div class="card-header"> {{ logRecord.created_at }} - {{ logRecord.log_instance }}</div>
                        <div class="card-body fix-height-200px">
                            <p class="card-title text-info">{{ logRecord.log_category }}</p>
                            <p class="card-text">{{ getLogPretty(logRecord.log_data) }}</p>
                        </div>
                    </div>
                </TransitionGroup>
            </CommonCard>


            </template>


    </ThreeColumnLayout>

</template>

<script>
import APIConstants from "../api/rest_api";
import MessagesConstants from "../components/strings_constants/strings.js";
import ThreeColumnLayout from "../layouts/ThreeColumnLayout.vue";
import { errorEvent } from "../api/errors";

export default {

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

            // console.log(data);
            // const jsonObj = JSON.parse(data);
            return data;
            if (typeof jsonObj === 'object') {
                // const {idx, fieldExt, payload} = jsonObj;
                return '/' + jsonObj?.idx + jsonObj?.fieldExt + ' => ' + jsonObj?.payload;
            }
            return 'Undefined Data';

        },

        async getBlogData() {
            console.log('blog')
            try {
                const _data = await axios.get(APIConstants.api_dev_blogs_read);
                this.devBlogs = _data.data.data;
            } catch (error) {
                errorEvent.errorEvent(error);
            }
        },

        async getLogData() {
            // console.log('log')
            try {
                const _data = await axios.get(APIConstants.api_logs_read_page + '1/5');
                this.logRecords = _data.data.data
            } catch (error) {
                errorEvent.errorEvent(error);
            }
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

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(80px);
}

.list-leave-active {
  position: absolute;
}

.fix-height-200px {
    max-height: 128px;
    overflow-y: auto;
}
</style>
