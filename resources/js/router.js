import { createWebHistory, createRouter } from "vue-router";

import Home from "./views/Home.vue"

const routes = [
  {
    path: "/",
    name: "Umolab Devices",
    component: Home,
    icon: "fas fa-home",
    ID: "HOME",
    visible: true,
    children: [
        {
            path: "/device_types",
            name: "Device Types",
            icon: "fas fa-layer-group",
            component: () => import('./components/device_types/DeviceTypes.vue'),
            ID: "DEVICE_TYPES"
        },
        {
            path: "/devices",
            name: "Devices",
            icon: "fas fa-sun",
            component: () => import('./components/devices/Devices.vue'),
            ID: "DEVICES"
          },
          {
            path: "/device_micros",
            name: "Device Micros",
            icon: "fas fa-sun",
            component: () => import('./components/device_micros/DeviceMicros.vue'),
            ID: "DEVICE_MICROS"
          },
          {
            path: "/param_types",
            name: "Param Types",
            icon: "fa-solid fa-cubes",
            component: () => import('./components/device_micros/ParamTypes.vue'),
            ID: "PARAM_TYPES"
          },
          {
            path: "/micros",
            name: "Controllers",
            icon: "fas fa-microchip",
            component: () => import('./components/micros/Micros.vue'),
            ID: "MICROS",
          },
          {
            path: "/user_devices",
            name: "User Devices",
            icon: "fas fa-users",
            component: () => import('./components/user_devices/UserDevices.vue'),
            ID: "USER_DEVICES"
          },
        ]
  },
  {
    path: "/device_types",
    name: "Device Types",
    icon: "fas fa-layer-group",
    component: () => import('./components/device_types/DeviceTypes.vue'),
    ID: "DEVICE_TYPES",
    visible: false
  },
  {
    path: "/devices",
    name: "Devices",
    icon: "fas fa-sun",
    component: () => import('./components/devices/Devices.vue'),
    ID: "DEVICES",
    visible: false
  },
  {
    path: "/device_micros",
    name: "Device Micros",
    icon: "fas fa-sun",
    component: () => import('./components/device_micros/DeviceMicros.vue'),
    ID: "DEVICE_MICROS",
    visible: false
  },
  {
    path: "/user_devices",
    name: "User Devices",
    icon: "fas fa-users",
    component: () => import('./components/user_devices/UserDevices.vue'),
    ID: "USER_DEVICES",
    visible: false
  },
  {
    path: "/micros",
    name: "Controllers",
    icon: "fas fa-microchip",
    component: () => import('./components/micros/Micros.vue'),
    ID: "MICROS",
    visible: false
  },
  {
    path: "/param_types",
    name: "Param Types",
    icon: "fa-solid fa-cubes",
    component: () => import('./components/device_micros/ParamTypes.vue'),
    ID: "PARAM_TYPES",
    visible: false
  },
  {
    path: "/albums",
    name: "Images Library",
    icon: "fas fa-images",
    component: () => import('./components/imagelib/albums/Albums.vue'),
    ID: "LIBRARY",
    visible: true,
    children: [
        {
            path: "/albums",
            name: "Albums",
            icon: "fas fa-images",
            component: () => import('./components/imagelib/albums/Albums.vue'),
            ID: "ALBUMS",
            visible: true
        },
        {
            path: "/images",
            name: "Images",
            icon: "fa-regular fa-image",
            component: () => import('./components/imagelib/images/Images.vue'),
            ID: "IMAGES",
            visible: true
          },

    ]
  },
  {
    path: "/images",
    name: "Images",
    icon: "fa-regular fa-image",
    component: () => import('./components/imagelib/images/Images.vue'),
    ID: "IMAGES",
    visible: false
  },
  {
    path: "/albums",
    name: "Albums",
    icon: "fas fa-images",
    component: () => import('./components/imagelib/albums/Albums.vue'),
    ID: "ALBUMS",
    visible: false
  },
  {
    path: "/users",
    name: "Users",
    icon: "fa-solid fa-user-tie",
    // component: () => import('./components/users/Users.vue'),
    ID: "ACCESS",
    visible: true,
    children: [
        {
            path: "/users",
            name: "Users",
            icon: "fa-solid fa-user-tie",
            component: () => import('./components/users/Users.vue'),
            ID: "USERS",
            visible: true
        },
        {
            path: "/roles",
            name: "Roles",
            icon: "fa-solid fa-circle-user",
            component: () => import('./components/users/Roles.vue'),
            ID: "ROLES",
            visible: true
        },
        {
            path: "/permissions",
            name: "Permissions",
            icon: "fa-solid fa-universal-access",
            component: () => import('./components/users/Permissions.vue'),
            ID: "PERMISSIONS",
            visible: true
          },

        {
            path: "/userroles",
            name: "User Roles",
            icon: "fa-solid fa-universal-access",
            component: () => import('./components/users/UserAccess.vue'),
            ID: "USERROLES",
            visible: true
          },

    ]

  },
  {
    path: "/users/:user_id",
    name: "UserInfo",
    icon: "fa-solid fa-user-tie",
    component: () => import('./components/users/UserInfo.vue'),
    ID: "USERINFO",
    visible: false
  },
  {
    path: "/presets",
    name: "Presets",
    icon: "fa-solid fa-gear",
    component: () => import('./components/presets/Presets.vue'),

    ID: "PRESETS",
    visible: true
  },
  {
    path: "/blog",
    name: "Blog",
    icon: "fa-brands fa-microblog",
    component: () => import('./components/blog/Blog.vue'),

    ID: "BLOG",
    visible: true
  },
  {
    path: "/dash/:device_micro_id",
    name: "Dash",
    icon: "fa-solid fa-gear",
    component: () => import('./views/Dash.vue'),

    ID: "DASH",
    visible: false
  },

  {
    name: "login",
    path: "/login",
    component: () => import('./components/auth/Login.vue'),
    meta: {
        middleware: "guest",
        title: `Login`
    }
  },
  {
    name: "register",
    path: "/auth/register",
    component: () => import('./components/Auth/Register.vue'),
    meta: {
        middleware: "guest",
        title: `Register`
    }
  },
  {
    path: "/",
    component: () => import('./views/Home.vue'),
    meta: {
        middleware: "auth"
    },
    children: [
        {
            name: "dashboard",
            path: '/',
            component: () => import('./views/Home.vue'),
            meta: {
                title: `Dashboard`
            }
        }
    ]
}

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
