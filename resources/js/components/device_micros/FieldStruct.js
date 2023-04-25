import APIConstants from "../../api/rest_api";

export default {
    DeviceMicroFieldStruct: [
        {
            Link: '/dash/',
            LinkTo: 'id',
            fieldName: 'Image',
            fieldCaption: '',
            type: String,
            isImage: false,
            isVirtualImage: true,
            VirtualImage: 'fa-solid fa-microchip fa-2x',
            selectedVirtualImage: 'fa-solid fa-microchip fa-2x',
            isEditable: false,
            isFieldIgnore: true,
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
            fieldName: 'device_micro_idx',
            fieldCaption: 'Idx',
            type: String,
            isImage: false,
            isEditable: true,
            isSortable: true,
            isHighLight: false,
            columnsCount: 2
        },

        {
            fieldName: 'device_micro_desc',
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
            fieldName: 'device_id',
            displayName: 'device_name',
            fieldCaption: 'Device',
            type: String,
            isImage: false,
            isEditable: false,
            isSortable: true,
            isHighLight: false,
            columnsCount: 2,
            lookupId: 'device_id',
            lookupApi: APIConstants.api_devices_read,
            isLookup: true,
        },
        {
            fieldName: 'micro_id',
            displayName: 'micro_name',
            fieldCaption: 'Micro',
            type: String,
            isImage: false,
            isEditable: false,
            isSortable: true,
            isHighLight: false,
            columnsCount: 2,
            lookupId: 'micro_id',
            lookupApi: APIConstants.api_micros_read,
            isLookup: true,
        },

    ],

    DeviceFieldStruct: [
        {
            fieldName: 'device_type_image',
                fieldCaption: 'Image',
                type: String,
                isImage: true,
                // isEditable: true,
                // isSortable: true,
                isHighLight: false,
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
            fieldName: 'device_name',
            fieldCaption: 'Name',
            type: String,
            // isEditable: true,
            isSortable: true,
            columnsCount: 6
        },

        {
            fieldName: 'micros_count',
            fieldCaption: 'Cnt',
            type: Number,
            isSortable: true,
            isHighLight: true,
            columnsCount: 2
        },

    ],

    MicroParamFieldStruct: [
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
            fieldName: 'device_micro_id',
            displayName: 'device_micro_idx',
            fieldCaption: 'Idx',
            type: String,
            isImage: false,
            isEditable: false,
            isSortable: true,
            isHighLight: false,
            columnsCount: 2,
            lookupId: 'device_micro_id',
            lookupApi: APIConstants.api_device_micros_read,
            isLookup: true,
        },

        {
            fieldName: 'param_name',
            fieldCaption: 'Name',
            type: String,
            isImage: false,
            isEditable: true,
            isSortable: true,
            isHighLight: false,
            columnsCount: 1
        },

        {
            fieldName: 'param_type_id',
            displayName: 'type_name',
            fieldCaption: 'Type',
            type: String,
            isImage: false,
            isEditable: false,
            isSortable: true,
            isHighLight: false,
            columnsCount: 1,
            lookupId: 'param_type_id',
            lookupApi: APIConstants.api_param_types_read,
            isLookup: true,
        },

        {
            fieldName: 'param_value',
            fieldCaption: 'Value',
            type: String,
            isImage: false,
            isEditable: true,
            isSortable: true,
            isHighLight: false,
            columnsCount: 1
        },

        {
            fieldName: 'param_in',
            fieldCaption: 'Dir',
            isDirectionVirtualImage: true,
            subscribeVirtualImage: 'fa-solid fa-arrow-left',
            publishVirtualImage: 'fa-solid fa-arrow-right',
            biDirectionalVirtualImage: 'fa-solid fa-arrows-left-right',
            isSortable: true,
            columnsCount: 1
        },

        {
            fieldName: 'param_suff',
            fieldCaption: 'Suff',
            type: String,
            isImage: false,
            isEditable: true,
            isSortable: true,
            isHighLight: false,
            columnsCount: 1
        },
        {
            fieldName: 'param_min',
            fieldCaption: 'Min',
            type: String,
            isImage: false,
            isEditable: true,
            isSortable: true,
            isHighLight: false,
            columnsCount: 1
        },
        {
            fieldName: 'param_max',
            fieldCaption: 'Max',
            type: String,
            isImage: false,
            isEditable: true,
            isSortable: true,
            isHighLight: false,
            columnsCount: 1
        },
    ],

    ParamTypeFieldStruct: [
        {
            fieldName: 'Image',
            type: String,
            isVirtualImage: true,
            isHighLight: true,
            isSortable: false,
            VirtualImage: 'fa-solid fa-cubes fa-2x',
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
            fieldName: 'type_name',
            fieldCaption: 'Name',
            type: String,
            isImage: false,
            isEditable: true,
            isSortable: true,
            isHighLight: false,
            columnsCount: 3
        },

        {
            fieldName: 'type_desc',
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
