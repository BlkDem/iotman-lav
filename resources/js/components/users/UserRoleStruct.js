import APIConstants from '../../api/rest_api'

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
            fieldName: 'role_id',
            displayName: 'name',
            fieldCaption: 'Role',
            type: String,
            isImage: false,
            isEditable: false,
            isSortable: true,
            isHighLight: false,
            columnsCount: 4,
            lookupId: 'role_id',
            lookupApi: APIConstants.api_roles_read,
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
            columnsCount: 4,
            lookupId: 'user_id',
            lookupApi: APIConstants.api_users_lookup,
            isLookup: true,
            isHidden: true,
        },


        // {
        //     fieldName: 'slug',
        //     fieldCaption: 'Slug',
        //     type: String,
        //     isImage: false,
        //     isSortable: true,
        //     isHighLight: false,
        //     columnsCount: 4
        // },

    ]
}
