<template>


</template>

<script>

import ConfirmDialogue from "../../components/common/ConfirmDialogue.vue";
// import AddUserDevice from "./AddUserDevice.vue";
// import Paginator from "../db/Paginator.vue";
import UserDeviceStringConstants from "../../components/strings_constants/user_devices/index";
import MessagesConstants from "../strings_constants/strings.js";
import APIConstants from "../../api/rest_api.js";
import Sorting from "../../helpers/Sorting.js";
import Filtering from "../../helpers/Filtering.js";
import ParsingErrors from "../../helpers/ParsingErrors";
import TableNav from '../../components/common/TableBar/TableNav.vue';


export default {
    components: {
        // ConfirmDialogue,
        // AddUserDevice,
        // Paginator /*MyMqtt*/ ,
        TableNav
    },

    data() {
        return {
        };
    },

    created() {
        if (localStorage.UserDeviceCompactView == null) {
            localStorage.UserDeviceCompactView = this.compactView;
        }

    },

};

</script>

<style>

</style>
