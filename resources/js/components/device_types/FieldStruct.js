export default {
    FieldStruct: [
        {
            fieldName: 'device_type_image',
            fieldCaption: 'Image',
            type: String,
            isImage: true,
            isEditable: true,
            isSortable: true,
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
            fieldName: 'device_type_name',
            fieldCaption: 'Name',
            type: String,
            isImage: false,
            isEditable: true,
            isSortable: true,
            isHighLight: false,
            columnsCount: 3
        },

        {
            fieldName: 'device_type_desc',
            fieldCaption: 'Description',
            type: String,
            isImage: false,
            isText: true,
            isEditable: true,
            isSortable: true,
            isHighLight: false,
            columnsCount: 5
        },

    ]
}
