<template>
    <div class="nav-item" v-for="(route, key) in routes" v-bind:key="key" v-bind:name="route.name">
        <router-link class="nav-link"
            v-bind:to="route.path"
            v-bind:class="{ active: this.$router.currentRoute._value.path === route.path, 'my-2': margins == 2}">
            <i v-if="route.icon != ''" :class="route.icon" class="ml-2"></i> {{ route.name }}
        </router-link>
    </div>
</template>

<script>
import MessagesConstants from "../strings_constants/strings.js";

export default {

props: {
    margins: {
        type: Number
    }
},

data() {
    return {
        routes: [],
        // margins: 2
    }
},

mounted() {
    this.getRoutes()
    // console.log(this.refresh)
},

methods: {
    getRoutes() {
        this.$router.options.routes.forEach(route => {
            // console.log(route.ID, MessagesConstants[route.ID], this.routes.length)
            this.routes.push({
                ID: MessagesConstants[route.ID] ?? route.name,
                name: MessagesConstants[route.ID] ?? route.name,
                path: route.path,
                icon: route.icon ?? ""
            })
        })
    },

    setLang(event)
    {
        // console.log('event menu', event)
        this.routes = []
        this.getRoutes()
    },

    newLang(event) {
        console.log('appmenu event', event)
    }
}
}
</script>
