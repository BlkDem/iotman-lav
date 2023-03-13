<template>
    <div class="nav-item dropdown" v-for="(route, key) in routes" v-bind:key="key" v-bind:name="route.name">

        <router-link class="nav-link" v-if="checkChildren(route.name).length===0" v-bind:to="route.path"
            v-bind:class="{ active: this.$router.currentRoute._value.path === route.path, 'my-2': margins == 2}">
            <i v-if="route.icon != ''" :class="route.icon" class="ml-2"></i> {{ route.name }}
        </router-link>

        <div class="nav-link dropdown-toggle " data-bs-toggle="dropdown" v-if="checkChildren(route.name).length > 0"
            role="button" aria-haspopup="true" aria-expanded="false">
            <i v-if="route.icon != ''" :class="route.icon" class="ml-2"></i> {{ route.name }}

        </div>

        <div class="dropdown-menu ">
            <router-link class="dropdown-item" v-for="(child, key1) in checkChildren(route.name)" v-bind:key="key1"
                v-bind:to="child.path">
                <i v-if="child.icon != ''" :class="child.icon" class="ml-2"></i> {{ child.name }}
            </router-link>
        </div>
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
        children: [],
        chBkp: []
        // margins: 2
    }
},

mounted() {
    this.getRoutes()
    // console.log(this.children)
},

methods: {
    checkChildren($parentRouteName) {
        this.children = this.chBkp
        const _ch = this.children.filter((a) => {
            console.log(a.parent, $parentRouteName)
            return a.parent === $parentRouteName;
        })

        // const res = (_ch > 0)
        console.log('filtered: ', _ch)
        return _ch
    },

    getRoutes() {
        this.$router.options.routes.forEach(route => {
            // console.log(route.ID, MessagesConstants[route.ID], this.routes.length)
            if (route.visible===true){
            this.routes.push({
                ID: MessagesConstants[route.ID] ?? route.name,
                name: MessagesConstants[route.ID] ?? route.name,
                path: route.path,
                icon: route.icon ?? ""
            })
            }
            // if (this.routes.children > 0)
            // console.log(route.children > 0)
            if (route.children != null) {
                route.children.forEach(child => {
                     console.log('populate: ', child, route.name)
                    this.children.push({
                        parent: route.name,
                        ID: child.ID,
                        name: child.name,
                        path: child.path,
                        icon: route.icon ?? ""
                    })
                })
                this.chBkp = this.children
                console.log('bkp: ', this.chBkp)
            }
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
