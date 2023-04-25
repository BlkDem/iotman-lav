import APIConstants from "../../../api/rest_api";

export default {
    ImageFieldStruct: [
        {
            fieldName: 'image_name',
            fieldCaption: 'Name',
            type: String,
            isImage: true,
            isEditable: true,
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
            fieldName: 'image_desc',
            fieldCaption: 'Description',
            type: String,
            isImage: false,
            isText: true,
            isEditable: true,
            isSortable: true,
            isHighLight: false,
            columnsCount: 5
        },
        {
            fieldName: 'album_id',
            displayName: 'album_name',
            fieldCaption: 'Album',
            type: String,
            columnsCount: 3,
            lookupId: 'album_id',
            lookupApi: APIConstants.api_albums_read,
            isLookup: true,
        },
    ],

    AlbumFieldStruct: [
        {
            fieldName: 'Image',
            type: String,
            isVirtualImage: true,
            isHighLight: true,
            isSortable: false,
            VirtualImage: 'fa-solid fa-folder-closed fa-2x',
            selectedVirtualImage: 'fa-solid fa-folder-open fa-2x',
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
            fieldName: 'album_name',
            fieldCaption: 'Name',
            type: String,
            isSortable: true,
            columnsCount: 6
        },

        {
            fieldName: 'images_count',
            fieldCaption: 'Cnt',
            type: Number,
            isSortable: true,
            isHighLight: true,
            columnsCount: 2
        },
    ]
}
