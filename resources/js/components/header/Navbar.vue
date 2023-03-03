<template>

  <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
      <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01"
              aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand logo" href="/">Umolab</a>

          <div class="collapse navbar-collapse" id="navbarColor01">
              <ul class="navbar-nav me-auto">
                  <li class="nav-item" v-for="(route, key) in routes" v-bind:key="key" v-bind:name="route.name">

                      <router-link class="nav-link" v-bind:to="route.path"
                          v-bind:class="{ active: this.$router.currentRoute._value.path === route.path }">
                          <i v-if="route.icon != ''" :class="route.icon" class="ml-1"></i> {{ route.name }}
                      </router-link>
                  </li>
              </ul>
          </div>
          <div class="d-flex">
              <ul class="navbar-nav me-auto">
                  <ThemeCombo ref="themeCombo"></ThemeCombo>
              </ul>
              <ul class="navbar-nav me-auto ">
                  <LangCombo ref="langCombo"></LangCombo>
              </ul>
              <ul class="navbar-nav me-auto">
                  <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle active px-2" data-bs-toggle="dropdown" href="#" role="button"
                          aria-haspopup="true" aria-expanded="false"><i class="fas fa-user"></i></a>
                      <div class="dropdown-menu" style="margin-left: -106px;">
                          <a class="dropdown-item" href="#">{{ userName }}</a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="#" @click="logout()">{{ userLogoutText }}</a>
                      </div>
                  </li>

              </ul>
          </div>
          <!-- <router-view /> -->
      </div>

  </nav>

  <div>
    <router-view />
  </div>
  <!-- <Toaster ref="toaster"/> -->

</template>

<script>
import ThemeCombo from "../../components/common/ThemeCombo.vue";
import LangCombo from "../../components/common/LangCombo.vue";
import MessagesConstants from "../strings_constants/strings.js";
import APIConstants from "../../rest_api.js";

import Langs from "../../langs";

export default {
    components: {
        ThemeCombo,
        LangCombo,
    },

    data() {
        return {
            isDeviceTypesActive: false,
            isDevicesActive: true,
            isUserDevicesActive: false,

            //menu
            devicesCaption: MessagesConstants.DEVICES,
            deviceTypesCaption: MessagesConstants.DEVICE_TYPES,
            userDevicesCaption: MessagesConstants.USER_DEVICES,
            imagesCaption: MessagesConstants.IMAGES,

            // user menu
            userName: '',
            userId: 0,
            userLogoutText: "Logout",

            routes: [],
        };
    },

    created() {
        this.getRoutes()
    },

    beforeMount () {
        this.currentLang = localStorage.Language ?? 'EN'
        this.loadLang(this.currentLang);
        this.loadUserInfo();
    },

    mounted() {

    },


    methods: {

        getRoutes() {
            this.$router.options.routes.forEach(route => {
                this.routes.push({
                    name: route.name,
                    path: route.path,
                    icon: route.icon ?? ""
                })
            })
            // console.log(this.$router)
            console.log(this.routes)
        },

        async loadUserInfo() {
            try {
                const response = await fetch(APIConstants.api_user_info);
                const user = await response.json();
                this.userName = user.data.name;
                this.userId = user.data.ID;
                console.log('user info: ID(' + this.userId + ') name: ' + this.userName);
                // console.log(user);
            } catch (error) {
                console.log('error loading user info: ' + error);
            }
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

            this.userLogoutText = MessagesConstants.LOGOUT_MENU

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

        logout() {
            window.location.href = '/logout';
        },

    },
};
</script>

<style>
@import "../../../sass/images.scss";
  .logo {
    margin-right: 1rem;
    padding-left: 8px;
   }

   .navbar-expand-lg .navbar-nav {
        align-items: flex-start;
    }

    .vertical-center {
        display: flex;
        align-items: center;
    }

    .navbar-nav .dropdown-menu {
        position: absolute;
    }



/* @media only screen and (min-width: 320px) and (max-width: 965px) {
  .logo {
    margin-right: auto;
   }
} */
</style>
