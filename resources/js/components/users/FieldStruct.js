export default {
    UserFieldStruct: [
        {
            fieldName: 'Image',
            fieldCaption: '',
            type: String,
            isImage: false,
            isVirtualImage: true,
            VirtualImage: 'fa-solid fa-user-tie fa-2x',
            isEditable: false,
            isSortable: false,
            isHighLight: true,
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
            fieldName: 'name',
            fieldCaption: 'Name',
            type: String,
            isImage: false,
            isEditable: true,
            isSortable: true,
            isHighLight: false,
            columnsCount: 4
        },

        {
            fieldName: 'email',
            fieldCaption: 'Email',
            type: String,
            isImage: false,
            isEditable: true,
            isSortable: true,
            isHighLight: true,
            columnsCount: 4
        },

    ]
}
