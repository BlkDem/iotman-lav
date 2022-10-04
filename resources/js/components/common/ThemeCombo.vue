<template>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle active"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="true"
            aria-expanded="false">{{ theme_caption }} <strong>{{ (currentTheme=='')?'(Default)': '(' + currentTheme + ')'}}</strong></a>
        <div class="dropdown-menu" style="margin-left: -32px; max-height: 600px; overflow-y: auto;">
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

  data () {
    return {
      themes:[],
      currentTheme: '',
      theme_caption: 'Theme'
    }
  },

  created() {
    this.readThemes()
    this.currentTheme = (_currentTheme === '')?'Default':_currentTheme; 
  },
  
  methods: {
    readThemes() {
      this.themes = [...ThemesList.Themes]
    },
    changeTheme(_theme) {
      this.currentTheme = _theme;
      localStorage.Theme = this.currentTheme;
      console.log(localStorage.Theme);
      document.location.href = (_theme==='')?'/':'/?theme=' + _theme;
    },

  }
}
</script>
