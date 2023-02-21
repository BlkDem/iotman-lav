<template>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle active"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="true"
            aria-expanded="false">{{ themeCaption }} <strong>{{ (currentTheme=='')?'(Default)': '(' + currentTheme + ')'}}</strong></a>
        <div class="dropdown-menu theme-dropdown">
            <a class="dropdown-item" href="#" v-for="theme in themes" :key="theme.id" @click='changeTheme(theme)'>{{ theme }}</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#" @click="changeTheme('')">Default</a>
        </div>
    </li>
</template>

<script>
import ThemesList from "../../themes.js";

export default {
    name: "ThemeCombo",

    data() {
        return {
            themes: [],
            currentTheme: '',
            themeCaption: 'Theme'
        }
    },

    created() {

    },

    mounted () {
        this.readThemes()
    },

    methods: {
        readThemes() {
            this.themes = [...ThemesList.Themes] //loading themes list

             this.currentTheme = _newTheme; // set theme name to combo caption

            if (_newTheme === '') { //_newTheme - request param and JS var from backend in index.blade - check empty
                _newTheme = (localStorage.Theme !== '') ? localStorage.Theme : 'Default'; //set default or stored theme
                localStorage.Theme = _newTheme; // save theme to storage
                document.location.href = '/?theme=' + _newTheme; //redirect default or stored
            }

            this.changeTheme(_newTheme); //change theme
        },

        changeTheme(theme) { // changing theme
            if (localStorage.Theme !== theme) { //no action if the same theme
                localStorage.Theme = theme; // save new theme to storage
                document.location.href = '/?theme=' + theme; //redirect with new theme
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
