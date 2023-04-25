export default {
    PresetFieldStruct: [
        {
            fieldName: 'Image',
            fieldCaption: '',
            type: String,
            isImage: false,
            isVirtualImage: true,
            VirtualImage: 'fa-solid fa-gear fa-2x',
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
            fieldName: 'preset_key',
            fieldCaption: 'Key',
            type: String,
            isImage: false,
            isEditable: true,
            isSortable: true,
            isHighLight: false,
            columnsCount: 3
        },

        {
            fieldName: 'preset_value',
            fieldCaption: 'Value',
            type: String,
            isImage: false,
            isEditable: true,
            isSortable: true,
            isHighLight: true,
            columnsCount: 3
        },

        {
            fieldName: 'preset_description',
            fieldCaption: 'Description',
            type: String,
            isImage: false,
            isText: true,
            isEditable: true,
            isSortable: true,
            isHighLight: false,
            columnsCount: 2
        },
    ]
}
