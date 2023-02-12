const apiPreffix = '/api/';
const APIVersion = 1;

export default {
    apiVersion: APIVersion,

    //Device Types CRUD 
    api_device_type_create: apiPreffix + 'device_types/create/',
    api_device_types_read: apiPreffix + 'device_types/read/',
    api_device_type_update: apiPreffix + 'device_type/update/',
    api_device_type_delete: apiPreffix + 'device_type/delete/',

    //Devices CRUD 
    api_device_create: apiPreffix + 'devices/create/',
    api_devices_read: apiPreffix + 'devices/read/',
    api_device_update: apiPreffix + 'devices/update/',
    api_device_delete: apiPreffix + 'devices/delete/',

    //User Devices CRUD 
    api_user_device_create: apiPreffix + 'user_devices/create/',
    api_user_devices_read: apiPreffix + 'user_devices/read/',
    api_user_device_update: apiPreffix + 'user_devices/update/',
    api_user_device_delete: apiPreffix + 'user_devices/delete/',
    
}