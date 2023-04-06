import { createWebHistory, createRouter } from "vue-router";

import Home from "./views/Home.vue"
// import DeviceTypes from "./components/device_types/DeviceTypes.vue"
// import Devices from "./components/devices/Devices.vue"
// import UserDevices from "./components/user_devices/UserDevices.vue"
// import Albums from "./components/imagelib/albums/Albums.vue"
// import Micros from "./components/micros/Micros.vue"
// import Users  from "./components/users/Users.vue"
// import Images from "./components/imagelib/images/Images.vue"
// import Presets from "./components/presets/Presets.vue"
// import DeviceMicros from "./components/device_micros/DeviceMicros.vue"
// import UserInfo from "./components/users/UserInfo.vue"
// import ParamTypes from "./components/device_micros/ParamTypes.vue"

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
            path: "device_types",
            name: "Device Types",
            icon: "fas fa-layer-group",
            // component: DeviceTypes,
            component: () => import('./components/device_types/DeviceTypes.vue'),
            ID: "DEVICE_TYPES"
        },
        {
            path: "devices",
            name: "Devices",
            icon: "fas fa-sun",
            // component: Devices,
            component: () => import('./components/devices/Devices.vue'),
            ID: "DEVICES"
          },
          {
            path: "device_micros",
            name: "Device Micros",
            icon: "fas fa-sun",
            // component: DeviceMicros,
            component: () => import('./components/device_micros/DeviceMicros.vue'),
            ID: "DEVICE_MICROS"
          },
          {
            path: "param_types",
            name: "Param Types",
            icon: "fa-solid fa-cubes",
            // component: ParamTypes,
            component: () => import('./components/device_micros/ParamTypes.vue'),
            ID: "PARAM_TYPES"
          },
          {
            path: "/micros",
            name: "Controllers",
            icon: "fas fa-microchip",
            // component: Micros,
            component: () => import('./components/micros/Micros.vue'),
            ID: "MICROS",
            // visible: true
          },
          {
            path: "/user_devices",
            name: "User Devices",
            icon: "fas fa-users",
            // component: UserDevices,
            component: () => import('./components/user_devices/UserDevices.vue'),
            ID: "USER_DEVICES"
          },
        ]
  },
  {
    path: "/device_types",
    name: "Device Types",
    icon: "fas fa-layer-group",
    // component: DeviceTypes,
    component: () => import('./components/device_types/DeviceTypes.vue'),
    ID: "DEVICE_TYPES",
    visible: false
  },
  {
    path: "/devices",
    name: "Devices",
    icon: "fas fa-sun",
    // component: Devices,
    component: () => import('./components/devices/Devices.vue'),
    ID: "DEVICES",
    visible: false
  },
  {
    path: "/device_micros",
    name: "Device Micros",
    icon: "fas fa-sun",
    // component: DeviceMicros,
    component: () => import('./components/device_micros/DeviceMicros.vue'),
    ID: "DEVICE_MICROS"
  },
  {
    path: "/user_devices",
    name: "User Devices",
    icon: "fas fa-users",
    // component: UserDevices,
    component: () => import('./components/user_devices/UserDevices.vue'),
    ID: "USER_DEVICES",
    visible: false
  },
  {
    path: "/micros",
    name: "Controllers",
    icon: "fas fa-microchip",
    // component: Micros,
    component: () => import('./components/micros/Micros.vue'),
    ID: "MICROS",
    visible: false
  },
  {
    path: "/param_types",
    name: "Param Types",
    icon: "fa-solid fa-cubes",
    // component: ParamTypes,
    component: () => import('./components/device_micros/ParamTypes.vue'),
    ID: "PARAM_TYPES",
    visible: false
  },
  {
    path: "/albums",
    name: "Images Library",
    icon: "fas fa-images",
    // component: Albums,
    component: () => import('./components/imagelib/albums/Albums.vue'),
    ID: "LIBRARY",
    visible: true,
    children: [
        {
            path: "/albums",
            name: "Albums",
            icon: "fas fa-images",
            // component: Albums,
            component: () => import('./components/imagelib/albums/Albums.vue'),
            ID: "ALBUMS",
            visible: true
        },
        {
            path: "/images",
            name: "Images",
            icon: "fa-regular fa-image",
            // component: Images,
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
    // component: Images,
    component: () => import('./components/imagelib/images/Images.vue'),
    ID: "IMAGES",
    visible: false
  },
  {
    path: "/albums",
    name: "Albums",
    icon: "fas fa-images",
    // component: Albums,
    component: () => import('./components/imagelib/albums/Albums.vue'),
    ID: "ALBUMS",
    visible: false
  },
  {
    path: "/users",
    name: "Users",
    icon: "fa-solid fa-user-tie",
    // component: Users,
    component: () => import('./components/users/Users.vue'),
    ID: "USERS",
    visible: true,
  },
  {
    path: "/users/:user_id",
    name: "UserInfo",
    icon: "fa-solid fa-user-tie",
    // component: UserInfo,
    component: () => import('./components/users/UserInfo.vue'),
    ID: "USERINFO",
    visible: false
  },
  {
    path: "/presets",
    name: "Presets",
    icon: "fa-solid fa-gear",
    // component: Presets,
    component: () => import('./components/presets/Presets.vue'),

    ID: "PRESETS",
    visible: true
  },
  {
    path: "/dash/:device_micro_id",
    name: "Dash",
    icon: "fa-solid fa-gear",
    // component: Presets,
    component: () => import('./views/Dash.vue'),

    ID: "DASH",
    visible: true
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
