
import './bootstrap';
import { createApp } from 'vue';
import { vue3Debounce } from 'vue-debounce'
import { SetupCalendar, Calendar, DatePicker } from 'v-calendar';
import router from './router'

import LangCombo from './components/header/LangCombo.vue';
import App from './components/App.vue';
import Navbar from './components/header/Navbar.vue';
import AppMenu from './components/common/AppMenu.vue';
import ThemeCombo from './components/header/ThemeCombo.vue';
import UserMenu from './components/common/UserMenu.vue';
import Toaster from './components/common/Toaster.vue'; //resources\js\components\common\Toaster.vue
import CommonCard from './components/common/CommonCard.vue';
import InfoCard from './components/common/InfoCard.vue';

import mitt from 'mitt';
const emitter = mitt();

import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.withCredentials = true;

const app = createApp(App);

app.config.globalProperties.emitter = emitter;

app.component('Calendar', Calendar)

app.component('DatePicker', DatePicker)

app.component('LangCombo', LangCombo);

app.component('Navbar', Navbar);

app.component('UserMenu', UserMenu);

app.component('ThemeCombo', ThemeCombo);

app.component('Toaster', Toaster);

app.component('CommonCard', CommonCard);

app.component('InfoCard', InfoCard);

app.component('AppMenu', AppMenu);

app.use(router)
    .use(SetupCalendar, {})
    .directive('debounce', vue3Debounce({ lock: true }))
    .mount('#app');

