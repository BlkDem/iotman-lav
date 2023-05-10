const apiPreffix = '/api/';
const APIVersion = 1;

export default {
    apiVersion: APIVersion,

    //Presets CRUD
    api_preset_create: apiPreffix +     'preset/create/',
    api_presets_read: apiPreffix +      'presets/read/',
    api_presets_group: apiPreffix +      'presets/group/',
    api_presets_read_page: apiPreffix + 'presets/read/page/',
    api_preset_update: apiPreffix +     'preset/update/',
    api_preset_delete: apiPreffix +     'preset/delete/',
    api_preset_patch: apiPreffix +      'preset/patch/',

    //Micros CRUD
    api_micro_create: apiPreffix +     'micro/create/',
    api_micros_read: apiPreffix +      'micros/read/',
    api_micros_read_page: apiPreffix + 'micros/read/page/',
    api_micro_update: apiPreffix +     'micro/update/',
    api_micro_delete: apiPreffix +     'micro/delete/',
    api_micro_patch: apiPreffix +      'micro/patch/',

    //Micro Params CRUD
    api_micro_param_create: apiPreffix +     'micro_param/create/',
    api_micro_params_read: apiPreffix +      'micro_params/read/',
    api_micro_params_read_page: apiPreffix + 'micro_params/read/page/',
    api_micro_param_update: apiPreffix +     'micro_param/update/',
    api_micro_param_delete: apiPreffix +     'micro_param/delete/',
    api_micro_param_patch: apiPreffix +      'micro_param/patch/',

    //Param Types CRUD
    api_param_type_create: apiPreffix +     'param_type/create/',
    api_param_types_read: apiPreffix +      'param_types/read/',
    api_param_types_read_page: apiPreffix + 'param_types/read/page/',
    api_param_type_update: apiPreffix +     'param_type/update/',
    api_param_type_delete: apiPreffix +     'param_type/delete/',
    api_param_type_patch: apiPreffix +      'param_type/patch/',

    //Device Micros CRUD
    api_device_micro_create: apiPreffix +     'device_micro/create/',
    api_device_micros_read: apiPreffix +      'device_micros/read/',
    api_device_micros_read_page: apiPreffix + 'device_micros/read/page/',
    api_device_micro_update: apiPreffix +     'device_micro/update/',
    api_device_micro_delete: apiPreffix +     'device_micro/delete/',
    api_device_micro_patch: apiPreffix +      'device_micro/patch/',
    api_device_micro_dash: apiPreffix +       'device_micro/dash/',

    //DevBlogs CRUD
    api_dev_blog_create: apiPreffix +    'dev_blog/create/',
    api_dev_blogs_read: apiPreffix +      'dev_blogs/read/',
    api_dev_blogs_read_page: apiPreffix + 'dev_blogs/read/page/',
    api_dev_blog_update: apiPreffix +     'dev_blog/update/',
    api_dev_blog_delete: apiPreffix +     'dev_blog/delete/',
    api_dev_blog_patch: apiPreffix +      'dev_blog/patch/',
    api_dev_blog_days: apiPreffix +      'dev_blog/daysofthemonth/',

    //Logs CRUD
    api_log_create: apiPreffix +     'log/create/',
    api_logs_read: apiPreffix +      'logs/read/',
    api_logs_read_page: apiPreffix + 'logs/read/page/',
    api_log_update: apiPreffix +     'log/update/',
    api_log_delete: apiPreffix +     'log/delete/',
    api_log_patch: apiPreffix +      'log/patch/',

    //Albums CRUD
    api_album_create: apiPreffix + 'album/create/',
    api_albums_read: apiPreffix + 'albums/read/',
    api_albums_lookup: apiPreffix + 'albums/lookup/',
    api_albums_read_page: apiPreffix + 'albums/read/page/',
    api_album_update: apiPreffix + 'album/update/',
    api_album_delete: apiPreffix + 'album/delete/',
    api_album_patch: apiPreffix +      'album/patch/',

    //Images CRUD + management
    api_image_create: apiPreffix + 'image/create/',
    api_images_read: apiPreffix + 'images/read/',
    api_images_read_page: apiPreffix + 'images/read/page/',
    api_image_update: apiPreffix + 'image/update/',
    api_image_delete: apiPreffix + 'image/delete/',
    api_image_patch: apiPreffix + 'image/patch/',

    // Upload Image to Server
    api_image_upload: apiPreffix + 'image/upload_image/',

    // Get image list from storage
    api_images_from_storage: apiPreffix + 'images/get_images/',

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
    api_devices_lookup: apiPreffix + 'devices/lookup/',
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

    //User Roles CRUD
    api_user_role_create: apiPreffix +     'user_role/create/',
    api_user_roles_read: apiPreffix +      'user_roles/read/',
    api_user_roles_read_page: apiPreffix + 'user_roles/read/page/',
    api_user_roles_user: apiPreffix +    'user_roles/user/',
    api_user_role_update: apiPreffix +     'user_role/update/',
    api_user_role_delete: apiPreffix +     'user_role/delete/',
    // api_user_role_patch: apiPreffix +      'user_role/patch/',

    //Roles CRUD
    api_role_create: apiPreffix +     'role/create/',
    api_roles_read: apiPreffix +      'roles/read/',
    api_role_getinfo: apiPreffix +    'role/read/',
    api_roles_read_page: apiPreffix + 'roles/read/page/',
    api_roles_lookup: apiPreffix +    'roles/lookup/',
    api_role_update: apiPreffix +     'role/update/',
    api_role_delete: apiPreffix +     'role/delete/',
    api_role_patch: apiPreffix +      'role/patch/',

    //Permissions CRUD
    api_permission_create: apiPreffix +     'permission/create/',
    api_permissions_read: apiPreffix +      'permissions/read/',
    api_permission_getinfo: apiPreffix +    'permission/read/',
    api_permissions_read_page: apiPreffix + 'permissions/read/page/',
    api_permissions_lookup: apiPreffix +    'permissions/lookup/',
    api_permission_update: apiPreffix +     'permission/update/',
    api_permission_delete: apiPreffix +     'permission/delete/',
    api_permission_patch: apiPreffix +      'permission/patch/',

    //Users CRUD
    api_user_create: apiPreffix + 'user/create/',
    api_users_read: apiPreffix + 'users/read/',
    api_user_getinfo: apiPreffix + 'user/read/',
    api_users_read_page: apiPreffix + 'users/read/page/',
    api_users_lookup: apiPreffix + 'users/lookup/',
    api_user_update: apiPreffix + 'user/update/',
    api_user_delete: apiPreffix + 'user/delete/',
    api_user_patch: apiPreffix +  'user/patch/',

    //User info
    api_user_info: apiPreffix + 'user',

}
