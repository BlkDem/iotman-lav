const apiPreffix = '/api/';
const APIVersion = 1;

export default {
    apiVersion: APIVersion,

    //Micros CRUD
    api_micro_create: apiPreffix +     'micro/create/',
    api_micros_read: apiPreffix +      'micros/read/',
    api_micros_read_page: apiPreffix + 'micros/read/page/',
    api_micro_update: apiPreffix +     'micro/update/',
    api_micro_delete: apiPreffix +     'micro/delete/',
    api_micro_patch: apiPreffix +      'micro/patch/',

    //DevBlogs CRUD
    api_dev_blog_create: apiPreffix +    'dev_blog/create/',
    api_dev_blogs_read: apiPreffix +      'dev_blogs/read/',
    api_dev_blogs_read_page: apiPreffix + 'dev_blogs/read/page/',
    api_dev_blog_update: apiPreffix +     'dev_blog/update/',
    api_dev_blog_delete: apiPreffix +     'dev_blog/delete/',
    api_dev_blog_patch: apiPreffix +      'dev_blog/patch/',

    //Albums CRUD
    api_album_create: apiPreffix + 'album/create/',
    api_albums_read: apiPreffix + 'albums/read/',
    api_albums_lookup: apiPreffix + 'albums/lookup/',
    api_albums_read_page: apiPreffix + 'albums/read/page/',
    api_album_update: apiPreffix + 'album/update/',
    api_album_delete: apiPreffix + 'album/delete/',
    api_album_patch: apiPreffix +      'album/patch/',

    //Images CRUD
    api_image_create: apiPreffix + 'image/create/',
    api_images_read: apiPreffix + 'images/read/',
    api_images_read_page: apiPreffix + 'images/read/page/',
    api_image_update: apiPreffix + 'image/update/',
    api_image_delete: apiPreffix + 'image/delete/',
    api_image_patch: apiPreffix + 'image/patch/',

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
    api_device_patch: apiPreffix +      'device/patch/',

    //User Devices CRUD
    api_user_device_create: apiPreffix + 'user_device/create/',
    api_user_devices_read: apiPreffix + 'user_devices/read/',
    api_user_devices_read_page: apiPreffix + 'user_devices/read/page/',
    api_user_device_update: apiPreffix + 'user_device/update/',
    api_user_device_delete: apiPreffix + 'user_device/delete/',
    api_user_device_patch: apiPreffix +      'user_device/patch/',

    //Users CRUD
    api_user_create: apiPreffix + 'user/create/',
    api_users_read: apiPreffix + 'users/read/',
    api_users_read_page: apiPreffix + 'users/read/page/',
    api_user_update: apiPreffix + 'user/update/',
    api_user_delete: apiPreffix + 'user/delete/',
    api_user_patch: apiPreffix +  'user/patch/',

    //User info
    api_user_info: apiPreffix + 'user',

    dataItems: [],

    async getData(_api) {
        // console.log(_api)
        return await axios.get(_api)
    },


    // async getItems() {
    //     console.log(await this.getData())
    // },

}
