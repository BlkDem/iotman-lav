import { createWebHistory, createRouter } from "vue-router";

import Home from "./views/Home.vue"
import DeviceTypes from "./components/device_types/DeviceTypes.vue"
import Devices from "./components/devices/Devices.vue"
import UserDevices from "./components/user_devices/UserDevices.vue"
import Albums from "./components/imagelib/albums/Albums.vue"

const routes = [
  {
    path: "/",
    name: "Wellcome",
    component: Home,
    icon: "fas fa-home",
  },
  {
    path: "/device_types",
    name: "Device Types",
    icon: "fas fa-layer-group",
    component: DeviceTypes,
  },
  {
    path: "/devices",
    name: "Devices",
    icon: "fas fa-sun",
    component: Devices,
  },
  {
    path: "/user_devices",
    name: "User Devices",
    icon: "fas fa-users",
    component: UserDevices,
  },
  {
    path: "/imagelib",
    name: "Images Library",
    icon: "fas fa-images",
    component: Albums,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
