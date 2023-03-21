
import './bootstrap';
import { createApp } from 'vue';
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

const app = createApp(App);

app.config.globalProperties.emitter = emitter;

app.component('LangCombo', LangCombo);

app.component('Navbar', Navbar);

app.component('UserMenu', UserMenu);

app.component('ThemeCombo', ThemeCombo);

app.component('Toaster', Toaster);

app.component('CommonCard', CommonCard);

app.component('InfoCard', InfoCard);

app.component('AppMenu', AppMenu);

app.use(router).mount('#app');

