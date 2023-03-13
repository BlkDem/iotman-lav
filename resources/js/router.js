import { createWebHistory, createRouter } from "vue-router";

import Home from "./views/Home.vue"
import DeviceTypes from "./components/device_types/DeviceTypes.vue"
import Devices from "./components/devices/Devices.vue"
import UserDevices from "./components/user_devices/UserDevices.vue"
import Albums from "./components/imagelib/albums/Albums.vue"

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
            ID: "DEVICE_TYPES_1"
        },
        {
            path: "devices",
            name: "Devices",
            icon: "fas fa-sun",
            component: Devices,
            ID: "DEVICES_1"
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
