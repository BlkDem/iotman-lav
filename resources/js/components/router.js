export default new VueRouter({
    mode: 'history',

    routes: [
        {
            path: 'devices', component: () => import('./Components/Devices/Index'),
            name: 'devices.index'
        },
        {
            path: 'users/Login', component: () => import('./Components/User/Login'),
            name: 'users.login'
        },
        {
            path: 'users/registration', component: () => import('./Components/User/Registration'),
            name: 'users.registration'
        }
    ]
}

)