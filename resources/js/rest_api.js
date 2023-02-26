const apiPreffix = '/api/';
const APIVersion = 1;

export default {
    apiVersion: APIVersion,

    //Device Types CRUD
    api_device_type_create: apiPreffix + 'device_type/create/',
    api_device_types_read: apiPreffix + 'device_types/read/',
    api_device_type_update: apiPreffix + 'device_type/update/',
    api_device_type_delete: apiPreffix + 'device_type/delete/',

    //Devices CRUD
    api_device_create: apiPreffix + 'devices/create/',
    api_devices_read: apiPreffix + 'devices/read/',
    api_device_update: apiPreffix + 'devices/update/',
    api_device_delete: apiPreffix + 'devices/delete/',

    //User Devices CRUD
    api_user_device_create: apiPreffix + 'user_device/create/',
    api_user_devices_read: apiPreffix + 'user_devices/read/',
    api_user_device_update: apiPreffix + 'user_device/update/',
    api_user_device_delete: apiPreffix + 'user_device/delete/',

    //Users CRUD
    api_users_create: apiPreffix + 'users/create/',
    api_users_read: apiPreffix + 'users/read/',
    api_users_update: apiPreffix + 'users/update/',
    api_users_delete: apiPreffix + 'users/delete/',

    //User info
    api_user_info: apiPreffix + 'user',
}
