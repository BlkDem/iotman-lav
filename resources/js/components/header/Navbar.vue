<template>
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">

        <!-- <a class="navbar-brand" href="#">
            <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="">
        </a> -->



        <div class="container-fluid">

            <Logo class="logo mx-2" v-once/>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01"
                aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>


            <div class="collapse navbar-collapse" id="navbarColor01">
                <ul class="navbar-nav me-auto">
                    <AppMenu ref="appMenu"></AppMenu>
                </ul>
            </div>
            <div class="flex-center">
                <ul class="navbar-nav me-auto">
                    <ThemeCombo ref="themeCombo"></ThemeCombo>
                </ul>
                <ul class="navbar-nav me-auto ">
                    <LangCombo ref="langCombo"></LangCombo>
                </ul>
                <ul class="navbar-nav me-auto">
                    <UserMenu ref="userMenu"></UserMenu>
                </ul>
            </div>
        </div>

    </nav>

</template>

<script>

import Logo from "./Logo.vue"

export default {

    components: {Logo},

    data() {
        return {
            styleCSS: '/css/vapor/app.css',
            // userAuth: this.$store.state.auth.authenticated,
            // user: {
            //     authentificated: false,
            // }
        }

    },

    emits: ['newLangUp'],

    methods: {
        newLang(event)
        {
            if (this.$refs.appMenu != null) this.$refs.appMenu.setLang(event)
            if (this.$refs.userMenu != null) this.$refs.userMenu.setLang(event)
        },

    },
};
</script>

<style lang="scss">
    @import "../../../sass/app.scss";
</style>
