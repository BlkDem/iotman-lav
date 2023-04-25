import APIConstants from "../../api/rest_api";

export default {
    DeviceFieldStruct: [
        {
            fieldName: 'device_type_image',
            fieldCaption: '',
            type: String,
            isImage: true,
            isFieldIgnore: true,
            isEditable: false,
            isSortable: false,
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
            fieldName: 'device_name',
            fieldCaption: 'Name',
            type: String,
            isImage: false,
            isEditable: true,
            isSortable: true,
            isHighLight: false,
            columnsCount: 2
        },

        {
            fieldName: 'device_desc',
            fieldCaption: 'Description',
            type: String,
            isImage: false,
            isText: true,
            isEditable: true,
            isSortable: true,
            isHighLight: false,
            columnsCount: 2
        },
        {
            fieldName: 'created_at',
            fieldCaption: 'Date',
            type: String,
            isImage: false,
            isEditable: false,
            isSortable: true,
            isHighLight: true,
            columnsCount: 2
        },
        {
            fieldName: 'device_type_id',
            displayName: 'device_type_name',
            fieldCaption: 'Device Type',
            type: String,
            isImage: false,
            isEditable: false,
            isSortable: true,
            isHighLight: false,
            columnsCount: 2,
            lookupId: 'device_type_id',
            lookupApi: APIConstants.api_device_types_read,
            isLookup: true,
        },

    ]
}
