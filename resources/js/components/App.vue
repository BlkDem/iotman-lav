<template>
    <div>
        <Navbar ref="navbar"></Navbar>
        <Toaster ref="toaster"></Toaster>
        <router-view />
    </div>

</template>

<script>
// import ToasterVue from './common/Toaster.vue'
// import NavbarVue from './header/Navbar.vue'

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

</style>
