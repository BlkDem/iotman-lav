<template>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle active px-2"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="true"
            aria-expanded="false">{{ (currentLang=='')?'EN': currentLang}}</a>
        <div class="dropdown-menu" style="margin-left: -106px;">
            <a class="dropdown-item" href="#" v-for="lang in langs" :key="lang.id" @click='changeLang(lang)'>{{ lang }}</a>
            <!-- <a class="dropdown-item" href="#" v-for="lang in langs" :key="lang.id"
                v-on:click="$emit('click', $event)">{{ lang }}</a> -->

        </div>
    </li>
</template>

<script>
import LangList from "../../langs.js";
import MessagesConstants from "../strings_constants/strings.js";

import lang_EN from "/lang/EN/index"
import lang_RU from "/lang/RU/index"


export default {
    name: "LangCombo",
    emits: [
        "newLang",
    ],

    data() {
        return {
            langs: [],
            currentLang: 'EN'
        }
    },

    created() {
        this.readLangs()
    },

    mounted() {
        this.currentLang = localStorage.Language ?? 'EN'
    },

    methods: {
        readLangs() {
            this.langs = [...LangList.Languages]
            if (localStorage.Language != null) {
                this.currentLang = localStorage.Language
            } else {
                localStorage.Language = this.currentLang
            }
            this.changeLang(this.currentLang)
        },

        changeLang(_lang) {
            this.currentLang = _lang
            //console.log(_lang)
            localStorage.Language = _lang
            if (_lang === 'EN') this.setActiveLang(lang_EN)
            if (_lang === 'RU') this.setActiveLang(lang_RU)
        },

        setActiveLang(_langObject) {
            for (var key in _langObject) {
                if (MessagesConstants.hasOwnProperty(key)) {
                    MessagesConstants[key] = _langObject[key]
                }
            }
            // this.$parent.newLang(_langObject)
            this.emitter.emit("new-lang", _langObject);
        },

        setStrings() {

        },

    }
}
</script>
