const apiPreffix = '/api/';
const APIVersion = 1;

export default {
    apiVersion: APIVersion,

    //Albums CRUD
    api_album_create: apiPreffix + 'album/create/',
    api_albums_read: apiPreffix + 'albums/read/',
    api_albums_read_page: apiPreffix + 'albums/read/page/',
    api_album_update: apiPreffix + 'album/update/',
    api_album_delete: apiPreffix + 'album/delete/',

    //Images CRUD
    api_image_create: apiPreffix + 'image/create/',
    api_images_read: apiPreffix + 'images/read/',
    api_images_read_page: apiPreffix + 'images/read/page/',
    api_image_update: apiPreffix + 'image/update/',
    api_image_delete: apiPreffix + 'image/delete/',

    //Device Types CRUD
    api_device_type_create: apiPreffix + 'device_type/create/',
    api_device_types_read: apiPreffix + 'device_types/read/',
    api_devices_types_read_page: apiPreffix + 'device_types/read/page/',
    api_device_type_update: apiPreffix + 'device_type/update/',
    api_device_type_patch: apiPreffix + 'device_type/patch/',
    api_device_type_delete: apiPreffix + 'device_type/delete/',

    //Devices CRUD
    api_device_create: apiPreffix + 'devices/create/',
    api_devices_read: apiPreffix + 'devices/read/',
    api_devices_read_page: apiPreffix + 'devices/read/page/',
    api_device_update: apiPreffix + 'devices/update/',
    api_device_delete: apiPreffix + 'devices/delete/',

    //User Devices CRUD
    api_user_device_create: apiPreffix + 'user_device/create/',
    api_user_devices_read: apiPreffix + 'user_devices/read/',
    api_user_devices_read_page: apiPreffix + 'user_devices/read/page/',
    api_user_device_update: apiPreffix + 'user_device/update/',
    api_user_device_delete: apiPreffix + 'user_device/delete/',

    //Users CRUD
    api_users_create: apiPreffix + 'users/create/',
    api_users_read: apiPreffix + 'users/read/',
    api_users_update: apiPreffix + 'users/update/',
    api_users_delete: apiPreffix + 'users/delete/',

    //User info
    api_user_info: apiPreffix + 'user',

    dataItems: [],

    getData(_api) {
        // console.log(_api)
        return axios.get(_api)
    },


    // async getItems() {
    //     console.log(await this.getData())
    // },

}
