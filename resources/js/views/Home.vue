<template>
    <h1 class="align-center mb-4 text-info" style="margin-top: 7.5rem; ">{{ pageCaption }}</h1>
    <div class="w-100 mx-4 my-2 align-left" style="font-size: 1.4rem; font-weight: 400;">
        <AppMenu ref="homeAppMenu"></AppMenu>
    </div>
</template>

<script>
// import AppMenu from '../components/common/AppMenu.vue';
import MessagesConstants from "../components/strings_constants/strings.js";

export default {

    // components: {AppMenu},
    emits: ["newLang"],

    data() {

        return {
            pageCaption: ""
        }
    },

    created() {
        // this.pageCaption = "Umolab Data Manager"
    },

    mounted() {
        this.pageCaption = MessagesConstants.HOME ?? "Welcome"
    },

    methods: {
        setLang(event) {
            console.log('home', event)
        }
    }

}
</script>
