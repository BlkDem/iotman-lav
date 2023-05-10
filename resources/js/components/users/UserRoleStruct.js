export default {
    FieldStruct: [
        {
            fieldName: 'Image',
            fieldCaption: '',
            type: String,
            isImage: false,
            isVirtualImage: true,
            VirtualImage: 'fa-solid fa-user-tie fa-2x',
            isSortable: false,
            isHighLight: true,
            columnsCount: 1
        },

        {
            fieldName: 'id',
            fieldCaption: 'ID',
            type: Number,
            isImage: false,
            isSortable: true,
            isHighLight: true,
            columnsCount: 1
        },

        {
            fieldName: 'name',
            fieldCaption: 'Name',
            type: String,
            isImage: false,
            isSortable: true,
            isHighLight: false,
            columnsCount: 4
        },

        {
            fieldName: 'slug',
            fieldCaption: 'Slug',
            type: String,
            isImage: false,
            isSortable: true,
            isHighLight: false,
            columnsCount: 4
        },

    ]
}
