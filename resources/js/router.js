import { createWebHistory, createRouter } from "vue-router";

import Home from "./views/Home.vue"
import DeviceTypes from "./components/device_types/DeviceTypes.vue"
import Devices from "./components/devices/Devices.vue"
import UserDevices from "./components/user_devices/UserDevices.vue"
import Albums from "./components/imagelib/albums/Albums.vue"
import Micros from "./components/micros/Micros.vue"
import Users  from "./components/users/Users.vue"
import Images from "./components/imagelib/images/Images.vue"
// import Presets from "./components/presets/Presets.vue"
import DeviceMicros from "./components/device_micros/DeviceMicros.vue"
import UserInfo from "./components/users/UserInfo.vue"
import ParamTypes from "./components/device_micros/ParamTypes.vue"

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
            // name: "Device Types",
            icon: "fas fa-layer-group",
            // component: DeviceTypes,
            ID: "DEVICE_TYPES"
        },
        {
            path: "devices",
            name: "Devices",
            icon: "fas fa-sun",
            component: Devices,
            ID: "DEVICES"
          },
          {
            path: "device_micros",
            name: "Device Micros",
            icon: "fas fa-sun",
            component: DeviceMicros,
            ID: "DEVICE_MICROS"
          },
          {
            path: "param_types",
            name: "Param Types",
            icon: "fa-solid fa-cubes",
            component: ParamTypes,
            ID: "PARAM_TYPES"
          },
          {
            path: "/micros",
            name: "Controllers",
            icon: "fas fa-microchip",
            component: Micros,
            ID: "MICROS",
            // visible: true
          },
          {
            path: "/user_devices",
            name: "User Devices",
            icon: "fas fa-users",
            component: UserDevices,
            ID: "USER_DEVICES"
          },
        ]
  },
//   {
//     path: "/micros",
//     name: "Controllers",
//     component: Micros,
//     icon: "fas fa-home",
//     ID: "MICROS",
//     visible: true,
//     children: [
//         {
//             path: "/micros",
//             name: "Controllers",
//             icon: "fas fa-layer-group",
//             component: Micros,
//             ID: "MICROS"
//         },
//     ]
//   },
  {
    path: "/device_types",
    name: "Device Types",
    icon: "fas fa-layer-group",
    component: DeviceTypes,
    ID: "DEVICE_TYPES",
    visible: false
  },
  {
    path: "/devices",
    name: "Devices",
    icon: "fas fa-sun",
    component: Devices,
    ID: "DEVICES",
    visible: false
  },
  {
    path: "/device_micros",
    name: "Device Micros",
    icon: "fas fa-sun",
    component: DeviceMicros,
    ID: "DEVICE_MICROS"
  },
  {
    path: "/user_devices",
    name: "User Devices",
    icon: "fas fa-users",
    component: UserDevices,
    ID: "USER_DEVICES",
    visible: false
  },
  {
    path: "/micros",
    name: "Controllers",
    icon: "fas fa-microchip",
    component: Micros,
    ID: "MICROS",
    visible: false
  },
  {
    path: "/param_types",
    name: "Param Types",
    icon: "fa-solid fa-cubes",
    component: ParamTypes,
    ID: "PARAM_TYPES",
    visible: false
  },
  {
    path: "/albums",
    name: "Images Library",
    icon: "fas fa-images",
    component: Albums,
    ID: "LIBRARY",
    visible: true,
    children: [
        {
            path: "/albums",
            name: "Albums",
            icon: "fas fa-images",
            component: Albums,
            ID: "ALBUMS",
            visible: true
        },
        {
            path: "/images",
            name: "Images",
            icon: "fa-regular fa-image",
            component: Images,
            ID: "IMAGES",
            visible: true
          },

    ]
  },
  {
    path: "/images",
    name: "Images",
    icon: "fa-regular fa-image",
    component: Images,
    ID: "IMAGES",
    visible: false
  },
  {
    path: "/albums",
    name: "Albums",
    icon: "fas fa-images",
    component: Albums,
    ID: "ALBUMS",
    visible: false
  },
  {
    path: "/users",
    name: "Users",
    icon: "fa-solid fa-user-tie",
    component: Users,
    ID: "USERS",
    visible: true,
  },
  {
    path: "/users/:id",
    name: "UserInfo",
    icon: "fa-solid fa-user-tie",
    component: UserInfo,
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

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
