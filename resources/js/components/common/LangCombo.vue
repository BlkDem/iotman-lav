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
        </div>
    </li>
</template>

<script>
import LangList from "../../langs.js";

export default {
    name: "LangCombo",

    data() {
        return {
            langs: [],
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
            if (localStorage.Language != null) {
                this.currentLang = localStorage.Language
            } else {
                localStorage.Language = this.currentLang
            }
        },

        changeLang(_lang) {
            this.currentLang = _lang
            console.log(_lang)
            localStorage.Language = _lang
            this.loadLang(_lang)
        },

        async loadLang(_lang) {
            try {
                const response = await fetch("/lang/" + _lang + ".json");

                const json = await response.json();
                console.log(_lang)
                if (json != null) {
                    MessagesConstants.CANCEL_STRING = json.messages.CANCEL_STRING
                    MessagesConstants.EDITED_MESSAGE = json.messages.EDITED_MESSAGE
                    MessagesConstants.ADDED_MESSAGE = json.messages.ADDED_MESSAGE
                    MessagesConstants.DELETED_MESSAGE = json.messages.DELETED_MESSAGE

                    MessagesConstants.PROCESS_SUCCESSFULLY = json.messages.PROCESS_SUCCESSFULLY
                    MessagesConstants.INSERTING_CANCELLED = json.messages.INSERTING_CANCELLED
                    MessagesConstants.EDITING_CANCELLED = json.messages.EDITING_CANCELLED
                    MessagesConstants.DELETING_CANCELLED = json.messages.DELETING_CANCELLED
                    MessagesConstants.NO_DESCRIPTION = json.messages.NO_DESCRIPTION

                    MessagesConstants.SORT_BY_NAME = json.messages.SORT_BY_NAME
                    MessagesConstants.SORT_BY_ID = json.messages.SORT_BY_ID
                    MessagesConstants.SORT_NAME = json.messages.SORT_NAME
                    MessagesConstants.SORT_ASC = json.messages.SORT_ASC
                    MessagesConstants.SORT_DESC = json.messages.SORT_DESC

                    MessagesConstants.DEVICE_TYPES = json.menu.DEVICE_TYPES
                    MessagesConstants.DEVICES = json.menu.DEVICES
                    MessagesConstants.USER_DEVICES = json.menu.USER_DEVICES
                    MessagesConstants.THEME = json.menu.THEME

                    MessagesConstants.LOGOUT_MENU = json.menu.LOGOUT_MENU


                    this.setStrings()

                } else {
                    console.log('Warning! No lang data!')
                }
            } catch (error) {
                console.log('Error! Can`t gat lang data!')
            }
        },

        setStrings() {

            //navbar menu items
            // this.devicesCaption = MessagesConstants.DEVICES
            // this.deviceTypesCaption = MessagesConstants.DEVICE_TYPES
            // this.userDevicesCaption = MessagesConstants.USER_DEVICES

            // this.userLogoutText = MessagesConstants.LOGOUT_MENU

            console.log(MessagesConstants)
            // this.$refs.themeCombo.themeCaption = MessagesConstants.THEME

        },

    }
}
</script>
