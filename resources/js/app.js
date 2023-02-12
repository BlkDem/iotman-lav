/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import { createApp } from 'vue';
import { defineAsyncComponent } from 'vue';


/**
 * Next, we will create a fresh Vue application instance. You may then begin
 * registering components with the application instance so they are ready
 * to use in your application's views. An example is included for you.
 */

const app = createApp({});

import Navbar from './components/header/Navbar.vue';

app.component('Navbar', Navbar);

import Toaster from './components/common/Toaster.vue';
app.component('toaster', Toaster);

app.component('device-type-list', defineAsyncComponent(() =>
  import('./components/device_types/DeviceTypes.vue')
))

app.component('device-list', defineAsyncComponent(() =>
  import('./components/devices/Devices.vue')
))

app.component('device-user-list', defineAsyncComponent(() =>
  import('./components/user_devices/UserDevices.vue')
))

app.mount('#app');
