export default {

    ERROR_LEVEL_INFO: 0,
    ERROR_LEVEL_WARNING: 1,
    ERROR_LEVEL_ERROR: 2,

    getError($errorObject) {
        var ValidResponse = ($errorObject.response.data !== "")?$errorObject.response.data:$errorObject
        var _msg = ""
        for (var key in ValidResponse) {
            _msg += key + ": " + ValidResponse[key][0] + "\n\r"
        }
        return _msg.slice(0, -1)
    },

}
