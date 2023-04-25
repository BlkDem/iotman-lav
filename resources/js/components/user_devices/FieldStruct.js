import APIConstants from "../../api/rest_api";

export default {
    UserDeviceFieldStruct: [
        {
            fieldName: 'device_type_image',
            fieldCaption: '',
            type: String,
            isImage: true,
            isEditable: false,
            isFieldIgnore: true,
            isHighLight: false,
            columnsCount: 1
        },
        {
            fieldName: 'id',
            fieldCaption: 'ID',
            type: Number,
            isImage: false,
            isEditable: false,
            isSortable: true,
            isHighLight: true,
            columnsCount: 1
        },
        {
            fieldName: 'user_device_name',
            fieldCaption: 'Name',
            type: String,
            isImage: false,
            isText: false,
            isEditable: true,
            isSortable: true,
            isHighLight: false,
            columnsCount: 3
        },

        {
            fieldName: 'device_id',
            displayName: 'device_name',
            fieldCaption: 'Device',
            type: String,
            isImage: false,
            isEditable: false,
            isSortable: true,
            isHighLight: false,
            columnsCount: 3,
            lookupId: 'device_id',
            lookupApi: APIConstants.api_devices_read,
            isLookup: true,
        },

        {
            fieldName: 'user_id',
            displayName: 'user_name',
            fieldCaption: 'User',
            type: String,
            isImage: false,
            isEditable: false,
            isSortable: true,
            isHighLight: false,
            columnsCount: 2,
            lookupId: 'user_id',
            lookupApi: APIConstants.api_users_read,
            isLookup: true,
        },
    ],

    UserFieldStruct: [
        {
            fieldName: 'Image',
            type: String,
            isVirtualImage: true,
            isHighLight: true,
            isSortable: false,
            VirtualImage: 'fa-solid fa-user-tie fa-2x',
            columnsCount: 2
        },

        {
            fieldName: 'id',
            fieldCaption: 'ID',
            type: Number,
            isSortable: true,
            isHighLight: true,
            columnsCount: 2
        },

        {
            fieldName: 'user_name',
            fieldCaption: 'Name',
            type: String,
            isSortable: true,
            columnsCount: 6
        },

        {
            fieldName: 'devices_count',
            fieldCaption: 'Cnt',
            type: Number,
            isSortable: true,
            isHighLight: true,
            columnsCount: 2
        },

    ]
}
