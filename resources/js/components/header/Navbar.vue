<template>
    <nav v-if="userAuth" class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01"
                aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <Logo class="logo" v-once/>

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

    computed: {
        userAuth() {
            return this.$store.state.auth.authenticated
        },
        // user () {
        //     return this.$store.state.count
        // }
    },

    methods: {
        newLang(event)
        {
            if (this.$refs.appMenu != null) this.$refs.appMenu.setLang(event)
            if (this.$refs.userMenu != null) this.$refs.userMenu.setLang(event)
        },

    },
};
</script>

<style>
    /* @import "../../../sass/images.scss"; */
</style>
