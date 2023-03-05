<template>
    <div class="nav-item" @newLang="setLang($event)" v-for="(route, key) in routes" v-bind:key="key" v-bind:name="route.name">
        <router-link class="nav-link" v-bind:to="route.path"
            v-bind:class="{ active: this.$router.currentRoute._value.path === route.path }">
            <i v-if="route.icon != ''" :class="route.icon" class="ml-1"></i> {{ route.name }}
        </router-link>
    </div>
</template>

<script>
import MessagesConstants from "../strings_constants/strings.js";

export default {

data() {
    return {
        routes: [],
    }
},

created() {
    this.getRoutes()
},

methods: {
    getRoutes() {
        this.$router.options.routes.forEach(route => {
            // console.log(MessagesConstants[route.ID])
            // let _lang = route.ID
            // _lang = MessagesConstants[route.ID]
            this.routes.push({
                ID: MessagesConstants[route.ID] ?? route.name,
                name: route.name,
                path: route.path,
                icon: route.icon ?? ""
            })
        })
    },

    setLang(event)
    {
        console.log('event menu', event)
    }
}
}
</script>
