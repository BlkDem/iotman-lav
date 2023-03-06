<template>
    <h1 class="align-center mb-4 text-info" style="margin-top: 7.5rem; ">{{ pageCaption }}</h1>
    <input class="form-control p-2 mb-2" placeholder="Input Device Name"/>
    <div class="w-100 mx-4 my-2 align-left" style="font-size: 1.4rem; font-weight: 400;">
        <AppMenu ref="homeAppMenu"></AppMenu>
    </div>
</template>

<script>

import MessagesConstants from "../components/strings_constants/strings.js";

export default {
    name: 'Home',

    data() {

        return {
            pageCaption: '',
        }
    },

    created() {
        this.pageCaption = MessagesConstants.HOME ?? 'Welcome'
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
        }
    },

}
</script>
