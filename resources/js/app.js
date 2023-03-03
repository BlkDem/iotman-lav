/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import { createApp } from 'vue';
import { defineAsyncComponent } from 'vue';
import Navbar from './components/header/Navbar.vue';

/**
 * Next, we will create a fresh Vue application instance. You may then begin
 * registering components with the application instance so they are ready
 * to use in your application's views. An example is included for you.
 */

// import { Vue } from 'vue'
// import { VueRouter } from 'vue-router'

// Vue.use(VueRouter)
import router from './router'
import Toaster from './components/common/Toaster.vue';

const app = createApp({});
app.component('Navbar', Navbar);
app.component('toaster', Toaster);
app.use(router).mount('#app');
