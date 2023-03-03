<template>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle active  a_cap"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="true"
            aria-expanded="false">
                <!-- {{ themeCaption }}  -->
                {{ (currentTheme=='')?'(Default)': currentTheme }}</a>
        <div class="dropdown-menu theme-dropdown ">
            <a class="dropdown-item a_cap" href="#" v-for="theme in themes" :key="theme.id" @click='changeTheme(theme)'>{{ theme }}</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#" @click="changeTheme('Default')">Default</a>
        </div>
    </li>
</template>

<script>
import ThemesList from "../../themes.js";

export default {
    name: "ThemeCombo",

    data() {
        return {
            themes: [], //themes list
            currentTheme: '', //binded current theme combo caption
            themeCaption: 'Theme' //binded theme caption preffix
        }
    },

    created() {
        this.readThemes() //loading themes list from file themes.js
    },

    methods: {
        readThemes() {
            this.themes = [...ThemesList.Themes] //loading themes list

            this.currentTheme = localStorage.Theme; // set binded theme combo caption

            if (_newTheme === 'Default') { //check theme request param '_newTheme' - backend var in index.blade.php

                 _newTheme = (localStorage.Theme !== '') ? localStorage.Theme : 'Default'; //set default theme
                 localStorage.Theme = _newTheme; // save request param theme to storage
                document.location.href = '/?theme=' + _newTheme; //redirect default or stored
            }

            this.changeTheme(_newTheme); //change theme
        },

        changeTheme(new_theme) { // changing theme
            if (localStorage.Theme !== new_theme) { //no action if the same theme

                localStorage.Theme = new_theme; //save a new theme
                document.location.href = '/?theme=' + new_theme; //redirect with a new theme
            }
        },

    }
}
</script>

<style lang="scss" scoped>
  .theme-dropdown {
    margin-left: -32px;
    max-height: 400px;
    overflow-y: auto;
  }
</style>
