
import './bootstrap';
import { createApp } from 'vue';
import router from './router'
import LangCombo from './components/common/LangCombo.vue';
import App from './components/App.vue';
import Navbar from './components/header/Navbar.vue';
import AppMenu from './components/common/AppMenu.vue';
import ThemeCombo from './components/common/ThemeCombo.vue';
import UserMenu from './components/common/UserMenu.vue';
import Toaster from './components/common/Toaster.vue'; //resources\js\components\common\Toaster.vue

const app = createApp(App);

app.component('LangCombo', LangCombo);

app.component('Navbar', Navbar);

app.component('UserMenu', UserMenu);

app.component('ThemeCombo', ThemeCombo);

app.component('Toaster', Toaster);

app.component('AppMenu', AppMenu);

app.use(router).mount('#app');
