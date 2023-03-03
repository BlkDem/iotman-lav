<template>
    <h1 class="align-center mb-4 text-info" style="margin-top: 7.5rem; ">{{ pageCaption }}</h1>
<div style="font-size: 1.2rem; font-weight: 400;">

    <div class="w-100 mx-4 my-2 align-left" v-for="(route, key) in routes" v-bind:key="key" v-bind:name="route.name">
        <router-link class="nav-link fade-in" v-bind:to="route.path"
            v-bind:class="{ active: this.$router.currentRoute._value.path === route.path }">
            <i v-if="route.icon != ''" class="mx-2" :class="route.icon"></i> {{ route.name }}
        </router-link>
    </div>
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
        this.pageCaption = "Umolab Data Manager"
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
