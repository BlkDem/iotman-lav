/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
// import { Vue } from 'vue'
import { createApp } from 'vue';
// import { defineAsyncComponent } from 'vue';


// import { Vue } from 'vue'
// import { VueRouter } from 'vue-router'

// Vue.use(VueRouter)
// import { createApp } from 'vue'
import router from './router'
import App from './components/App.vue';
import Navbar from './components/header/Navbar.vue';
import Toaster from './components/common/Toaster.vue'; //resources\js\components\common\Toaster.vue

const app = createApp(App);
// const app = createApp(App);
app.component('Navbar', Navbar);
app.component('Toaster', Toaster);
app.use(router).mount('#app');
