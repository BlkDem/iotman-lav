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
        readThemes() {  //loading themes list
            this.themes = [...ThemesList.Themes]

            this.currentTheme = localStorage.Theme; // set theme name

            //window.alert("->" + _currentTheme + "<-");

            if (_currentTheme === '') { //check theme request param

                _currentTheme = (localStorage.Theme !== '') ? localStorage.Theme : 'Default'; //set default theme
                localStorage.Theme = _currentTheme;
                document.location.href = '/?theme=' + _currentTheme; //redirect default
            }
            // if (localStorage.Theme === '') { //check storage theme key
            //     localStorage.Theme = _currentTheme; //save current theme param in storage
            // }
            this.changeTheme(_currentTheme); //change theme
        },

        changeTheme(_theme) { // changing theme
            if (localStorage.Theme !== _theme) { //no action if the same

                localStorage.Theme = _theme;
                console.log('new theme: ', _theme);
                document.location.href = '/?theme=' + _theme;
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
