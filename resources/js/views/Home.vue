<template>
    <h1 class="align-left px-4 pb-1" style="margin-top: 7.5rem">
        {{ pageCaption }}
    </h1>

    <div class="row">
        <!-- page menu -->
        <div class="col-sm-3 col-lg-3 col-md-3">
            <CommonCard ref="menuCard"
                :cardCaption="menuBlockCaption"
                :isAdditionalCaption="true"
                :margins="margins">
                <AppMenu ref="homeAppMenu" :margins="margins" :isDropdowns="false"></AppMenu>
            </CommonCard>
        </div>
        <!-- page content -->
        <div class="col-sm-6 col-lg-6 col-md-6">
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
        </div>
        <!-- messages -->
        <div class="col-sm-3 col-lg-3 col-md-3">
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
        </div>

    </div>

    <div class="w-100 mx-4 my-2 align-left" style="font-size: 1.4rem; font-weight: 400;">
        <!-- <AppMenu ref="homeAppMenu"></AppMenu> -->
    </div>
<!-- <router-view /> -->
</template>

<script>
// import CommonCard from '../components/common/CommonCard.vue';
// import InfoCard from '../components/common/InfoCard.vue';
import APIConstants from "../api/rest_api";
import MessagesConstants from "../components/strings_constants/strings.js";
import Field from "../helpers/test";
import { marked } from 'marked';

// import ColorPicker from '../components/common/ColorPicker.vue';

export default {
    name: 'Home',

    data() {

        return {
            pageCaption: '',
            menuBlockCaption: 'Menu',
            informationBlockCaption: 'Information',
            logBlockCaption: 'Log',
            margins: 2,
            deviceTypesApi: '',
            devicesApi: '',
            bgColor: 'bg-success',
            device_type_id: undefined,
            device_id: undefined,

            devBlogs: [],
        }
    },

    created() {

        this.deviceTypesApi = APIConstants.api_device_types_read
        this.devicesApi = APIConstants.api_devices_read

        this.pageCaption = MessagesConstants.HOME ?? 'Umolab Devices'
        this.menuBlockCaption = MessagesConstants.menuBlockCaption ?? 'Menu'
        this.informationBlockCaption = MessagesConstants.informationBlockCaption ?? 'Information'
        this.logBlockCaption = MessagesConstants.logBlockCaption ?? 'Log'

        this.getBlogData()

        const a = new Field('test name', 'test props')
        console.log(a.getName(), a.getProperty())

    },

    mounted() {

        this.emitter.on("new-lang", _lang => {
            this.setLang(_lang)
        });
    },

    watch: {

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

        changeColor(_color){
            this.color = _color
        }
    },

}
</script>
