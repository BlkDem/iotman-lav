<template>
    <div style="margin-top: 5.5rem">
        <!-- {{ pageCaption }} -->
    </div>


    <CommonCard
        :cardCaption="userInfoCaption"
    >
        <div class="row">
            <div class="col-sm-3 col-md-3 col-lg-3 flex-center">
                <i class="fas fa-user fa-10x"></i>
            </div>
            <div class="col-sm-9 col-md-9 col-lg-9">
                <div><p><strong>User name:</strong> {{ dataItems.name }} </p></div>
                <div><p><strong>Email:</strong> {{ dataItems.email }}</p></div>
                <div><p><strong>Created:</strong> {{ dataItems.created_at }}</p></div>
                <div><p><strong>Registered:</strong> {{ dataItems.email_verified_at }}</p></div>
            </div>
        </div>

    </CommonCard>



</template>

<script>

import APIConstants from "../../api/rest_api";
import CommonCard from "../common/CommonCard.vue";
import MessagesConstants from '../strings_constants/strings'

export default {

    components: {CommonCard},

    data() {
        return {
            dataItems: "",

            userId: {
                type: Number
            },

            userInfoCaption: 'User Information'
        };
    },

    created() {
        this.userId = this.$route.params.id;
        console.log("id: ", this.userId);
        this.userInfoCaption = MessagesConstants.USERINFO
        this.getData(this.userId);
    },

    methods: {
        async getData(userId) {
            await axios.get(APIConstants.api_user_getinfo + userId)
                .then(response => {
                this.dataItems = response.data;
                console.log(response.data);
            })
        }
    },
}

</script>
