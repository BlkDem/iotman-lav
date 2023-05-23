<template>
    <div>
        <Navbar ref="navbar"></Navbar>
        <Toaster ref="toaster"></Toaster>
        <router-view />
        <!-- <Home /> -->
    </div>

</template>

<script>
// import ToasterVue from './common/Toaster.vue'
// import NavbarVue from './header/Navbar.vue'

// import Home from '../views/Home.vue';

export default {
    name: 'App',
    components: { },
    data()
    {
        return {

        }
    },

    mounted() {
    },
}
</script>

<style>

@import "../../sass/images.scss";

</style>
