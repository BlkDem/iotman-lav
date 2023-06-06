<template>
    <link rel="stylesheet" id="themeCss" />
    <div>
        <Navbar ref="navbar"></Navbar>
        <Toaster ref="toaster"></Toaster>
        <router-view />
        <SocialLinks />
    </div>

</template>

<script>

import SocialLinks from './footer/SocialLinks.vue';

export default {
    name: 'App',

    components: {
        SocialLinks
    }
}
</script>

<style lang="scss">

@import "../../sass/images.scss";
@import "../../sass/app.scss";

</style>
