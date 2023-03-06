<template>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle active px-2" data-bs-toggle="dropdown" href="#" role="button"
            aria-haspopup="true" aria-expanded="false"><i class="fas fa-user"></i></a>
        <div class="dropdown-menu" style="margin-left: -106px;">
            <a class="dropdown-item" href="#">{{ userName }}</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" @click="logout">{{ userLogoutText }}</a>
        </div>
    </li>
</template>

<script>

import APIConstants from "../../rest_api.js";
import MessagesConstants from "../strings_constants/strings.js";

export default {

    data() {
        return {
            userName: '',
            userId: 0,
            userLogoutText: MessagesConstants.LOGOUT_MENU ?? "Logout",
        }
    },

    created() {
        this.loadUserInfo();
    },

    methods: {

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

        logout() {
            window.location.href = '/logout';
        },

        setLang(event) {
            this.userLogoutText = MessagesConstants.LOGOUT_MENU ?? "Logout"
        }

    }
}
</script>

