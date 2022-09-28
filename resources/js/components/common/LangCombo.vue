<template>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle active"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="true"
            aria-expanded="false">{{ (currentLang=='')?'EN': currentLang}}</a>
        <div class="dropdown-menu" style="margin-left: -106px;">
            <a class="dropdown-item" href="#" v-for="lang in langs" :key="lang.id" @click='changeLang(lang)'>{{ lang }}</a>
        </div>
    </li>
</template>

<script>
import LangList from "../../langs.js";

export default {
  name: "LangCombo",

  data () {
    return {
      langs:[],
      currentLang: 'EN',
    }
  },

  created() {
    this.readLangs()
    //this.currentLang = _currentTheme; 
  },
  
  methods: {
    readLangs() {
      this.langs = [...LangList.Languages]
    },
    changeLang(_lang) {
      this.currentLang = _lang;
      localStorage.Language = this.currentLang;
      console.log(localStorage.Language);
    },

  }
}
</script>