<template>
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01"
                aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <!-- <a class="logo" href="/"> -->
                <object type="image/svg+xml" data="images/logo/u-logo2.svg" id="object_1" class="icon logo"
                    style="width: 120px;">
                </object>
            <!-- </a> -->

            <div class="collapse navbar-collapse" id="navbarColor01">
                <ul class="navbar-nav me-auto">
                    <AppMenu ref="appMenu"></AppMenu>
                </ul>
            </div>
            <div class="d-flex">
                <ul class="navbar-nav me-auto">
                    <ThemeCombo ref="themeCombo"></ThemeCombo>
                </ul>
                <ul class="navbar-nav me-auto ">
                    <LangCombo ref="langCombo"></LangCombo>
                </ul>
                <ul class="navbar-nav me-auto">
                    <UserMenu ref="userMenu"></UserMenu>
                </ul>
            </div>
        </div>

    </nav>

</template>

<script>

export default {

    emits: ['newLangUp'],

    methods: {
        newLang(event)
        {
            //  console.log('navbar', event)
            if (this.$refs.appMenu != null) this.$refs.appMenu.setLang(event)
            if (this.$refs.userMenu != null) this.$refs.userMenu.setLang(event)
            //  this.$parent.$emit('newLangUp')
        },

    },
};
</script>

<style>
    @import "../../../sass/images.scss";
</style>
