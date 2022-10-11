<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
    <div class="container-fluid">
 <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
     <a class="navbar-brand logo" href="#">Umolab</a>
 
      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a
              class="nav-link"
              v-bind:class="{ active: isDeviceTypesActive }"
              @click="onDeviceTypesClick"
              href="#"
              >{{ deviceTypesCaption }}</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              v-bind:class="{ active: isDevicesActive }"
              @click="onDevicesClick"
              href="#"
              >{{ devicesCaption }}</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
              v-bind:class="{ active: isUserDevicesActive }"
              @click="onUserDevicesClick"
              >{{ userDevicesCaption }}</a
            >
          </li>
          <!-- <ThemeCombo ref="themeCombo"></ThemeCombo> -->
        </ul>
      </div>
      <div class="d-flex">
        <!-- <input class="form-control me-sm-2" type="text" placeholder="Search" /> -->
        <ul class="navbar-nav me-auto">
            <ThemeCombo ref="themeCombo"></ThemeCombo>
        </ul>
        <ul class="navbar-nav me-auto">
            <LangCombo ref="langCombo"></LangCombo>
        </ul>
      </div>
           
    </div>
  </nav>
</template>

<script>
import ThemeCombo from "../../components/common/ThemeCombo.vue";
import LangCombo from "../../components/common/LangCombo.vue";
import MessagesConstants from "../strings_constants/strings.js";
import Langs from "../../langs";

export default {
  components: {
    ThemeCombo,
    LangCombo,
  },

  data() {
    return {
      isDeviceTypesVisible: false,
      isDevicesVisible: true,
      isUserDevicesVisible: false,
      isDeviceTypesActive: false,
      isDevicesActive: true,
      isUserDevicesActive: false,

        //menu
      devicesCaption: MessagesConstants.DEVICES,
      deviceTypesCaption: MessagesConstants.DEVICE_TYPES,
      userDevicesCaption: MessagesConstants.USER_DEVICES,
    };
  },

  created() {

    
  },

    mounted() {
        this.currentLang = (localStorage.Language!=null)?localStorage.Language:'EN'
        this.loadLang(this.currentLang);
    },


  methods: {

    async loadLang(_lang) {
        try {
            const response = await  fetch("/lang/" + _lang + ".json");
    
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
                MessagesConstants.THEME = json.menu.THEME
                MessagesConstants.USER_DEVICES = json.menu.USER_DEVICES
    
                this.setStrings()
    
            } else {
                /* Handle responce errors */
            }
        } catch (error) {
            /* Handle fetch errors */
        }
    },



    setStrings() {

        //navbar menu items
        this.devicesCaption = MessagesConstants.DEVICES
        this.deviceTypesCaption = MessagesConstants.DEVICE_TYPES
        this.userDevicesCaption = MessagesConstants.USER_DEVICES

        this.$refs.themeCombo.themeCaption = MessagesConstants.THEME
    },

    setHideAll() {
      this.isDevicesActive = false;
      this.isUserDevicesActive = false;
      this.isDeviceTypesActive = false;
      this.$root.$refs.DeviceRef.ShowHide(false);
      this.$root.$refs.DeviceUserRef.ShowHide(false);
      this.$root.$refs.DeviceTypeRef.ShowHide(false);
    },

    onDeviceTypesClick() {
      this.setHideAll();
      this.isDeviceTypesActive = true;
      this.$root.$refs.DeviceTypeRef.ShowHide(this.isDeviceTypesActive);
    },

    onDevicesClick() {
      this.setHideAll();
      this.isDevicesActive = true;
      this.$root.$refs.DeviceRef.ShowHide(this.isDevicesActive);
    },

    onUserDevicesClick() {
      this.setHideAll();
      this.isUserDevicesActive = true;
      this.$root.$refs.DeviceUserRef.ShowHide(this.isUserDevicesActive);
    },

    setMessage(message, header) {
      this.$refs.toaster.setMessage(message, header);
    },
  },
};
</script>

<style scoped>
  .logo {
    margin-right: auto;
    padding-left: 8px;
   }  


/* @media only screen and (min-width: 320px) and (max-width: 965px) {
  .logo {
    margin-right: auto;
   }  
} */
</style>