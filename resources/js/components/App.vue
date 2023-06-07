<template>
    <link rel="stylesheet" id="themeCss" />
    <div>
        <Navbar v-if="userAuth" ref="navbar"></Navbar>
        <Toaster v-if="userAuth" ref="toaster"></Toaster>

        <router-view />

        <SocialLinks v-if="userAuth" />
    </div>

</template>

<script>

import SocialLinks from './footer/SocialLinks.vue';

export default {
    name: 'App',

    components: {
        SocialLinks
    },

    computed: {
        userAuth() {
            return this.$store.state.auth?.authenticated
        },
    },

}
</script>

<style lang="scss">

@import "../../sass/images.scss";
@import "../../sass/aligns.scss";
@import "../../sass/app.scss";

</style>
