<template>
    <h1 class="align-left px-4 pb-1" style="margin-top: 7.5rem">
        {{ pageCaption }}
    </h1>

    <div class="row">
        <!-- page menu -->
        <div class="col-sm-3 col-lg-3 col-md-3">
            <CommonCard ref="menuCard" :cardCaption="menuBlockCaption" :margins="margins">
                <AppMenu ref="homeAppMenu" :margins="margins"></AppMenu>
            </CommonCard>
        </div>
        <!-- page content -->
        <div class="col-sm-6 col-lg-6 col-md-6">
            <CommonCard ref="menuCard" :cardCaption="informationBlockCaption">
                <InfoCard v-for="(itemCard, key) in infoCardData"
                    :key="key"
                    :infoCardCaption="itemCard.infoCardCaption"
                    :infoCardTitle="itemCard.infoCardTitle"
                    :infoCardText="itemCard.infoCardText"
                    :infoCardMoreButtonCaption="itemCard.infoCardMoreButtonCaption"
                    :marginBottom="itemCard.marginBottom"
                    :buttonVisible="itemCard.buttonVisible"
                    :bgColor="itemCard.bgColor"
                    :infoCardMoreText="itemCard.infoCardMoreText"
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
</template>

<script>
import CommonCard from '../components/common/CommonCard.vue';
import InfoCard from '../components/common/InfoCard.vue';

import MessagesConstants from "../components/strings_constants/strings.js";

export default {
    name: 'Home',

    components: {
            CommonCard,
            InfoCard
        },

    data() {

        return {
            pageCaption: '',
            menuBlockCaption: 'Menu',
            informationBlockCaption: 'Information',
            logBlockCaption: 'Log',
            margins: 2,

            infoCardData: [
                {
                    infoCardCaption: "07.03.2023 16:22",
                    infoCardTitle: "Home page blocks complieted",
                    infoCardText: "Congradulation! We are did it!",
                    infoCardMoreText: "More text...",
                    marginBottom: 2,
                    //buttonVisible: true,
                    bgColor: 'bg-success'
                },
                {
                    infoCardCaption: "06.03.2023 10:20",
                    infoCardTitle: "Home page blocks starting...",
                    infoCardText: "Now we are starting to arrange blocks on the home page.",
                    infoCardMoreText: "More text...",
                    marginBottom: 2,
                    //buttonVisible: false,
                    bgColor: 'bg-info'
                },
            ]

        }
    },

    created() {
        this.pageCaption = MessagesConstants.HOME ?? 'Welcome'
        this.menuBlockCaption = MessagesConstants.menuBlockCaption ?? 'Menu'
        this.informationBlockCaption = MessagesConstants.informationBlockCaption ?? 'Information'
        this.logBlockCaption = MessagesConstants.logBlockCaption ?? 'Log'
    },

    mounted() {

        this.emitter.on("new-lang", _lang => {
        // console.log(_lang)
        this.setLang(_lang)
        });
    },

    methods: {
        setLang(_lang) {
            this.pageCaption = _lang.HOME ?? 'Welcome'
            this.menuBlockCaption = _lang.menuBlockCaption ?? 'Menu'
            this.informationBlockCaption = _lang.informationBlockCaption ?? 'Information'
            this.logBlockCaption = _lang.logBlockCaption ?? 'Log'
        }
    },

}
</script>
