<template>
    <div id="main">
        <Navbar ref="navbar" v-on:click="onClick"></Navbar>
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
    emits: [
        'click',
        'newLang',
        'handleClick',
        'onClick'
    ],
    data()
    {
        return {

        }
    },

    mounted() {
        //console.log(this.$root.components)
    },

    handleClick(_lang) {
        console.log('app click', _lang)
    },

    onClick(_lang) {
        console.log('App', _lang)
    }
}
</script>

<style>

</style>
