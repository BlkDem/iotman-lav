<template>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle active px-2" data-bs-toggle="dropdown" href="#" role="button"
            aria-haspopup="true" aria-expanded="false"><i class="fas fa-user"></i></a>
        <div class="dropdown-menu" style="margin-left: -106px;">
            <a class="dropdown-item" :href="'/users/'+user.data.ID">{{ user.data.name }}</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" @click="logout">{{ userLogoutText }}</a>
        </div>
    </li>
</template>

<script>

// import APIConstants from "../../api/rest_api";
import MessagesConstants from "../strings_constants/strings.js";
import {mapActions} from 'vuex'

export default {

    data() {
        return {
            // userName: '',
            // userId: 0,
            userLogoutText: MessagesConstants.LOGOUT_MENU ?? "Logout",
            user: this.$store.state.auth.user
        }
    },

    created() {
        // this.loadUserInfo();
        console.log(this.user)
    },

    methods: {

        ...mapActions({
            signOut:"auth/logout"
        }),

        // async loadUserInfo() {
        //     try {
        //         const response = await fetch(APIConstants.api_user_info);
        //         const user = await response.json();
        //         this.userName = user.data.name;
        //         this.userId = user.data.ID;
        //         console.log('user info: ID(' + this.userId + ') name: ' + this.userName);
        //         // console.log(user);
        //     } catch (error) {
        //         console.log('error loading user info: ' + error);
        //     }
        // },

        async logout(){
            await axios.post('/logout').then(({data})=>{
                this.signOut()
                this.$router.push({name:"login"})
            })
        },

        setLang(event) {
            this.userLogoutText = MessagesConstants.LOGOUT_MENU ?? "Logout"
        }

    }
}
</script>

