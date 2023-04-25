export default {
    AlbumFieldStruct: [
        {
            fieldName: 'Image',
            type: String,
            isVirtualImage: true,
            isHighLight: true,
            isSortable: false,
            VirtualImage: 'fa-solid fa-folder-closed fa-2x',
            columnsCount: 1
        },

        {
            fieldName: 'id',
            fieldCaption: 'ID',
            type: Number,
            isSortable: true,
            isHighLight: true,
            columnsCount: 1
        },

        {
            fieldName: 'album_name',
            fieldCaption: 'Name',
            type: String,
            isEditable: true,
            isSortable: true,
            columnsCount: 3
        },

        {
            fieldName: 'album_desc',
            fieldCaption: 'Description',
            type: String,
            isText: true,
            isEditable: true,
            isSortable: true,
            columnsCount: 5
        },

    ]
}
