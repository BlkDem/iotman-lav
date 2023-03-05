export default {
    HOME: "Добро пожаловать",
    LIBRARY: "Библиотека",
    IMAGES: "Изображения",
    ALBUMS: "Альбомы",
    DEVICE_TYPES: "Типы устройств",
    DEVICES: "Устройства",
    USER_DEVICES: "Пользовательские",
    THEME: "Тема",

    CANCEL_STRING: "Отмена",
    EDITED_MESSAGE: "Изменено",
    ADDED_MESSAGE: "Добавлено",
    DELETED_MESSAGE: "Удалено",
    PROCESS_SUCCESSFULLY: "Успешно",
    INSERTING_CANCELLED: "Добавление отменено",
    INSERTING_ERROR: "Ошибка добавления",

    EDITING_CANCELLED: "Изменение отменено",
    EDITING_ERROR: "Ошибка изменения",
    DELETING_CANCELLED: "Удаление отменено",


    NO_DESCRIPTION: " нет описания",
    NO_HWID: " нет адреса устройста",
    NO_PASS: " нет пароля",

    SORT_BY_NAME: "По имени",
    SORT_BY_ID: "По ID",
    SORT_NAME: "Сортировка",
    SORT_ASC: "По возрастанию",
    SORT_DESC: "По убыванию",

    LOGOUT_MENU: "Выход",

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

}
