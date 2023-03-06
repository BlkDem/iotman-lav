<template>
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01"
                aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand logo" href="/">Umolab</a>

            <div class="collapse navbar-collapse" id="navbarColor01">
                <ul class="navbar-nav me-auto">
                    <AppMenu ref="appMenu"></AppMenu>
                </ul>
            </div>
            <div class="d-flex">
                <ul class="navbar-nav me-auto">
                    <ThemeCombo ref="themeCombo"></ThemeCombo>
                </ul>
                <ul class="navbar-nav me-auto ">
                    <LangCombo ref="langCombo" v-on:click="handleClick"></LangCombo>
                </ul>
                <ul class="navbar-nav me-auto">
                    <UserMenu ref="userMenu"></UserMenu>
                </ul>
            </div>
        </div>

    </nav>

</template>

<script>
// import ThemeCombo from "../../components/common/ThemeCombo.vue";
// import LangCombo from "../../components/common/LangCombo.vue";
// import AppMenu from "../common/AppMenu.vue";
// import UserMenu from "../../components/common/UserMenu.vue";

import Langs from "../../langs";

export default {

    emits: [
        // 'changeLang',
        'click'
    ],

    components: {
        // ThemeCombo,
        // LangCombo,
        // AppMenu,
        // UserMenu
    },

    data() {
        return {

            //menu

            // user menu
            // routes: [],
        };
    },

    methods: {
        newLang(event)
        {
             console.log('navbar', event)
            if (this.$refs.appMenu != null) this.$refs.appMenu.setLang(event)
        },

        changeLang(_lang) {
            console.log('change', _lang)
        },

        handleClick(_event)
        {
            // console.log('click', _event)
            this.$emit('click', _event)
        }
    },
};
</script>

<style>
    @import "../../../sass/images.scss";
  /* .logo {
    margin-right: 1rem;
    padding-left: 8px;
   }

   .navbar-expand-lg .navbar-nav {
        align-items: flex-start;
    }

    .vertical-center {
        display: flex;
        align-items: center;
    }

    .navbar-nav .dropdown-menu {
        position: absolute;
    } */



/* @media only screen and (min-width: 320px) and (max-width: 965px) {
  .logo {
    margin-right: auto;
   }
} */
</style>
