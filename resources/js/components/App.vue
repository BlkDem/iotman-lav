<template>
    <div>
        <Navbar ref="navbar"></Navbar>
        <Toaster ref="toaster"></Toaster>
        <router-view />
    </div>

</template>

<script>

export default {
    name: 'App',
}
</script>

<style>

@import "../../sass/images.scss";

</style>
