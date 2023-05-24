<template>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle active  a_cap"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="true"
            aria-expanded="false">
                <!-- {{ themeCaption }}  -->
                {{ currentTheme }}</a>
        <div class="dropdown-menu theme-dropdown ">
            <a class="dropdown-item a_cap" href="#"
                v-for="theme in themes"
                :key="theme.id"
                @click='currentTheme=theme; changeTheme(theme)'
                >
                {{ theme }}
            </a>
            <!-- <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#" @click="changeTheme('slate')">slate</a> -->
        </div>
    </li>
</template>

<script>
import Themes from "../../themes.js";

export default {
    name: "ThemeCombo",

    data() {
        return {
            themes: [], //themes list
            currentTheme: '', //binded current theme combo caption
            // themeCaption: 'Theme' //binded theme caption preffix
        }
    },

    mounted() {

        this.readThemes() //loading themes list from file themes.js
        this.currentTheme=(localStorage.Theme != null)?localStorage.Theme:'slate'
    },

    methods: {
        readThemes() {
            this.themes = [...Themes.Themes] //loading themes list
            this.changeTheme((localStorage.Theme != null)?localStorage.Theme:'slate')
        },

        changeTheme(new_theme) { // changing theme
            return
            Themes.setTheme(new_theme)
            if (localStorage.Theme !== new_theme) { //no action if the same theme
                localStorage.Theme = new_theme; //save a new theme
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
