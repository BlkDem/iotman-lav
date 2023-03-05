
import './bootstrap';
import { createApp } from 'vue';
import router from './router'
import App from './components/App.vue';
import Navbar from './components/header/Navbar.vue';
import Toaster from './components/common/Toaster.vue'; //resources\js\components\common\Toaster.vue

const app = createApp(App);
app.component('Navbar', Navbar);
app.component('Toaster', Toaster);
app.use(router).mount('#app');
