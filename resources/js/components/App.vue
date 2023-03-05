<template>
    <div id="main">
        <Navbar ref="navbar"></Navbar>
        <Toaster ref="toaster"></Toaster>
    </div>
  <router-view />
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
    }
}
</script>

<style>

</style>
