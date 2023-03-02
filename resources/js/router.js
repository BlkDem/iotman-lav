import { createWebHistory, createRouter } from "vue-router";

import Home from "./views/Home.vue"
import DeviceTypes from "./components/device_types/DeviceTypes.vue"
import Devices from "./components/devices/Devices.vue"
import UserDevices from "./components/user_devices/UserDevices.vue"

const routes = [
  {
    path: "/",
    name: "Wellcome",
    component: Home,
  },
  {
    path: "/device_types",
    name: "Device Types",
    component: DeviceTypes,
  },
  {
    path: "/devices",
    name: "Devices",
    component: Devices,
  },
  {
    path: "/user_devices",
    name: "User Devices",
    component: UserDevices,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
