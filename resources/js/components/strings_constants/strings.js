export default {
    HOME: "Umolab Devices",
    LIBRARY: "Images Library",
    IMAGES: "Images",
    ALBUMS: "Albums",
    DEVICE_TYPES: "Device Types",
    DEVICES: "Devices",
    USER_DEVICES: "User`s Devices",
    THEME: "Theme",

    CANCEL_STRING: "Cancel",
    EDITED_MESSAGE: "Edited",
    ADDED_MESSAGE: "Added",
    DELETED_MESSAGE: "Deleted",
    PROCESS_SUCCESSFULLY: "Successfully",
    INSERTING_CANCELLED: "Inserting Cancelled",
    INSERTING_ERROR: "Inserting Error",

    EDITING_CANCELLED: "Editing Cancelled",
    EDITING_ERROR: "Editing Error",
    DELETING_CANCELLED: "Deleting Cancelled",


    NO_DESCRIPTION: " no description ",
    NO_HWID: " no device address",
    NO_PASS: " no password",

    SORT_BY_NAME: "By Name",
    SORT_BY_ID: "By ID",
    SORT_NAME: "Sort",
    SORT_ASC: "ASC",
    SORT_DESC: "DESC",

    LOGOUT_MENU: "Logout",

    menuBlockCaption: 'Menu',
    informationBlockCaption: 'Information',
    logBlockCaption: 'Log',

    //strings processing

    SortingCaption($column, $direction) {
        let res =
            $column === "id" ?
            this.SORT_BY_ID :
            this.SORT_BY_NAME;
        res += " (";
        res += !$direction ?
            this.SORT_ASC :
            this.SORT_DESC;
        res += ")";
        return res;
    },

    // processUserDeviceStrings($items) {
    //     $items.forEach((dev, key)=> {
    //             $items[key].device_desc=dev.device_desc==null ? this.NO_DESCRIPTION : dev.device_desc;
    //             $items[key].device_hwid=dev.device_hwid==null ? this.NO_HWID : dev.device_hwid;
    //             $items[key].device_pass=dev.device_hwid==null ? this.NO_PASS : dev.device_pass;
    //         }

    //     );
    // },

    // processDeviceStrings($items) {
    //     $items.forEach((dev, key) => {
    //         $items[key].device_desc = dev.device_desc ?? this.NO_DESCRIPTION;
    //         $items[key].device_hwid = dev.device_hwid ?? this.NO_HWID;
    //         $items[key].device_pass = dev.device_pass ?? this.NO_PASS;
    //     });
    // },

    // processDeviceTypeStrings($items) {
    //     $items.forEach((dev, key) => {
    //         $items[key].device_type_desc = dev.device_type_desc ?? this.NO_DESCRIPTION;
    //     });
    // }
}
