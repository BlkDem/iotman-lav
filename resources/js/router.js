import { createWebHistory, createRouter } from "vue-router";

import Home from "./views/Home.vue"
import DeviceTypes from "./components/device_types/DeviceTypes.vue"
import Devices from "./components/devices/Devices.vue"
import UserDevices from "./components/user_devices/UserDevices.vue"
import Albums from "./components/imagelib/albums/Albums.vue"
import Micros from "./components/micros/Micros.vue"

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
            component: DeviceTypes,
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
    visible: true
  },
  {
    path: "/imagelib",
    name: "Images Library",
    icon: "fas fa-images",
    component: Albums,
    ID: "LIBRARY",
    visible: true
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
