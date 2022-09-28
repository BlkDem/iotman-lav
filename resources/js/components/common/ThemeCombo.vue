<template>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle active"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="true"
            aria-expanded="false">Theme {{ (currentTheme=='')?'(Default)': '(' + currentTheme + ')'}}</a>
        <div class="dropdown-menu" style="margin-left: -32px;">
            <a class="dropdown-item" href="#" v-for="theme in themes" :key="theme.id" @click='changeTheme(theme)'>{{ theme }}</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#" @click="changeTheme('')">Default</a>
        </div>
    </li>
</template>

<script>
import ThemesList from "../../components/strings_constants/themes.js";

export default {
  name: "ThemeCombo",

  data () {
    return {
      themes:[],
      currentTheme: 'Default',
    }
  },

  created() {
    this.readThemes()
    this.currentTheme = _currentTheme; 
  },
  
  methods: {
    readThemes() {
      this.themes = [...ThemesList.Themes]
    },
    changeTheme(_theme) {
      this.currentTheme = _theme;
      localStorage.Theme = this.currentTheme;
      console.log(localStorage.Theme);
      document.location.href = '/?theme=' + _theme;
    },

  }
}
</script>