import MessagesStrings from "./components/strings_constants/strings.js";

export default {
    MessagesConstants: MessagesStrings,

    Languages: [
        'EN',
        'RU',
    ],

    LanguageStrings: [],

    currentLang: 'EN',




    // loadLang() {
    //     if (localStorage.Language!=null) {
    //         this.currentLang = localStorage.Language
    //     }


        // fetch("/lang/" + this.currentLang + ".json")
        // .then(r => r.json())
        // .then(json => {

            // this.MessagesConstants.CANCEL_STRING = json.messages.CANCEL_STRING
            // this.MessagesConstants.EDITED_MESSAGE = json.messages.EDITED_MESSAGE
            // this.MessagesConstants.ADDED_MESSAGE = json.messages.ADDED_MESSAGE
            // this.MessagesConstants.DELETED_MESSAGE = json.messages.DELETED_MESSAGE
            // this.MessagesConstants.PROCESS_SUCCESSFULLY = json.messages.PROCESS_SUCCESSFULLY
            // this.MessagesConstants.INSERTING_CANCELLED = json.messages.INSERTING_CANCELLED
            // this.MessagesConstants.EDITING_CANCELLED = json.messages.EDITING_CANCELLED
            // this.MessagesConstants.DELETING_CANCELLED = json.messages.DELETING_CANCELLED
            // this.MessagesConstants.NO_DESCRIPTION = json.messages.NO_DESCRIPTION
            // this.MessagesConstants.SORT_BY_NAME = json.messages.SORT_BY_NAME
            // this.MessagesConstants.SORT_BY_ID = json.messages.SORT_BY_ID
            // this.MessagesConstants.SORT_NAME = json.messages.SORT_NAME
            // this.MessagesConstants.SORT_ASC = json.messages.SORT_ASC
            // this.MessagesConstants.SORT_DESC = json.messages.SORT_DESC
            // this.MessagesConstants.DEVICE_TYPES = json.menu.DEVICE_TYPES
            // this.MessagesConstants.DEVICES = json.menu.DEVICES
            // this.MessagesConstants.THEME = json.menu.THEME
            // this.MessagesConstants.USER_DEVICES = json.menu.USER_DEVICES

            // console.log('loading strings', MessagesStrings, this.MessagesConstants);

            // this.$root.$refs.navbar.devices_caption = Langs.MessagesConstants.DEVICES
            // this.$root.$refs.navbar.device_types_caption = Langs.MessagesConstants.DEVICE_TYPES
            // this.$root.$refs.navbar.user_devices_caption = Langs.MessagesConstants.USER_DEVICES

            // this.$refs.themeCombo.theme_caption = Langs.MessagesConstants.THEME

            // console.log(this.$refs.themeCombo.theme_caption)


        // });

 //    }
}
