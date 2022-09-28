<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Umolab</a>
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

      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a
              class="nav-link"
              v-bind:class="{ active: isDeviceTypesActive }"
              @click="onDeviceTypesClick"
              href="#"
              >Device Types</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              v-bind:class="{ active: isDevicesActive }"
              @click="onDevicesClick"
              href="#"
              >Devices</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
              v-bind:class="{ active: isUserDevicesActive }"
              @click="onUserDevicesClick"
              >User's Devices</a
            >
          </li>
          <!-- <ThemeCombo ref="themeCombo"></ThemeCombo> -->
        </ul>
      </div>
      <div class="d-flex">
        <input class="form-control me-sm-2" type="text" placeholder="Search" />
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
    };
  },
  created() {
      fetch("/lang/RU.json")
        .then(r => r.json())
        .then(json => {
          //console.log(json, json.messages.PROCESS_SUCCESSFULLY);
          MessagesConstants.PROCESS_SUCCESSFULLY = json.messages.PROCESS_SUCCESSFULLY
          MessagesConstants.SORT_NAME = json.messages.SORT_NAME
        });

    //this.isDeviceTypesVisible = this.$root.$refs.DeviceTypeRef.getVisible();
    //console.log(this.$root.$refs.DeviceTypeRef);
  },

  methods: {
    onDeviceTypesClick() {
      //this.isDeviceTypesVisible = !this.isDeviceTypesVisible;
      //this.isDeviceTypesActive = this.isDeviceTypesVisible;
      this.isDevicesActive = false;
      this.isUserDevicesActive = false;
      this.isDeviceTypesActive = true;

      this.$root.$refs.DeviceRef.ShowHide(false);
      this.$root.$refs.DeviceUserRef.ShowHide(false);
      this.$root.$refs.DeviceTypeRef.ShowHide(true);
      //this.$root.$refs.DeviceTypeRef.ShowHide(this.isDeviceTypesVisible);
    },

    onDevicesClick() {
      this.isDevicesActive = true;
      this.isUserDevicesActive = false;
      this.isDeviceTypesActive = false;

      this.$root.$refs.DeviceRef.ShowHide(true);
      this.$root.$refs.DeviceUserRef.ShowHide(false);
      this.$root.$refs.DeviceTypeRef.ShowHide(false);
      /*this.isDevicesVisible = !this.isDevicesVisible;
            this.isDevicesActive = this.isDevicesVisible;
            this.$root.$refs.DeviceRef.ShowHide(this.isDevicesVisible);*/
    },

    onUserDevicesClick() {
      this.isDevicesActive = false;
      this.isUserDevicesActive = true;
      this.isDeviceTypesActive = false;

      this.$root.$refs.DeviceRef.ShowHide(false);
      this.$root.$refs.DeviceUserRef.ShowHide(true);
      this.$root.$refs.DeviceTypeRef.ShowHide(false);

      /*this.isUserDevicesVisible = !this.isUserDevicesVisible;
            this.isUserDevicesActive = this.isUserDevicesVisible;
            this.$root.$refs.DeviceUserRef.ShowHide(this.isUserDevicesVisible);*/
    },

    setMessage(message, header) {
      this.$refs.toaster.setMessage(message, header);
    },
  },
};
</script>