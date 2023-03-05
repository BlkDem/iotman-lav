<template>
    <div class="nav-item" v-for="(route, key) in routes" v-bind:key="key" v-bind:name="route.name">
        <router-link class="nav-link" v-bind:to="route.path"
            v-bind:class="{ active: this.$router.currentRoute._value.path === route.path }">
            <i v-if="route.icon != ''" :class="route.icon" class="ml-1"></i> {{ route.name }}
        </router-link>
    </div>
</template>

<script>
export default {

data() {
    return {
        routes: [],
        pageCaption: ""
    }
},

created() {
    this.getRoutes()
},

methods: {
    getRoutes() {
        this.$router.options.routes.forEach(route => {
            this.routes.push({
                name: route.name,
                path: route.path,
                icon: route.icon ?? ""
            })
        })
    }
}
}
</script>
