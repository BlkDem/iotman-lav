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
        if (localStorage.Language!=null) {
            this.currentLang = localStorage.Language
        } 
        else {
            localStorage.Language = this.currentLang
        }
    },

    changeLang(_lang) {
      this.currentLang = _lang
      console.log(_lang)
      localStorage.Language = _lang
      this.$root.$refs.navbar.loadLang(_lang);
    //   console.log('before', LangList.MessagesConstants)
    //   LangList.loadLang(_lang)
    //   console.log('after', LangList.MessagesConstants)
    //   this.$root.$refs.navbar.setStrings(LangList.MessagesConstants);
    },

  }
}
</script>