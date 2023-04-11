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
                        <div class="card text-white bg-success mb-3">
                            <div class="card-header">Header</div>
                            <div class="card-body">
                                <h5 class="card-title">Success card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the
                                    bulk of the card's content.</p>
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
        }
    },

    created() {

        this.pageCaption = MessagesConstants.HOME ?? 'Umolab Devices'
        this.menuBlockCaption = MessagesConstants.menuBlockCaption ?? 'Menu'
        this.informationBlockCaption = MessagesConstants.informationBlockCaption ?? 'Information'
        this.logBlockCaption = MessagesConstants.logBlockCaption ?? 'Log'

        this.getBlogData()

        // const a = new Field('test name', 'test props')
        // console.log(a.getName(), a.getProperty())

    },

    mounted() {

        this.emitter.on("new-lang", _lang => {
            this.setLang(_lang)
        });
    },

    methods: {
        async getBlogData() {
            const _data = await axios.get(APIConstants.api_dev_blogs_read)
            this.devBlogs = _data.data.data
        },

        setLang(_lang) {
            this.pageCaption = _lang.HOME ?? 'Welcome'
            this.menuBlockCaption = _lang.menuBlockCaption ?? 'Menu'
            this.informationBlockCaption = _lang.informationBlockCaption ?? 'Information'
            this.logBlockCaption = _lang.logBlockCaption ?? 'Log'
        },

    },

}
</script>
