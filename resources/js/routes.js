/*//import AllProduct from './components/AllProduct.vue';
import CreateProduct from './components/CreateProduct.vue';
import EditProduct from './components/EditProduct.vue';
//import home from './components/app.vue';
const home = () =>import ( '../components/app.vue')
 
export const routes = [
    {
        name: 'home',
        path: '/',
        component: home
        //component: AllProduct
    },
    {
        name: 'create',
        path: '/create',
        component: CreateProduct
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: EditProduct
    }
];
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './routes/home';

Vue.use(VueRouter);
export default new VueRouter({
    mode: 'history',
    scrollBehavior: (to, from, savedPosition) => ({ y: 0 }), 
    routes: [
        ...home,
    ],
});
