export default {

    ERROR_LEVEL_INFO: 0,
    ERROR_LEVEL_WARNING: 1,
    ERROR_LEVEL_ERROR: 2,

    getError($errorObject) {

        let ValidResponse = ($errorObject.response.data !== "") ? $errorObject.response.data : $errorObject
        let _msg = ""

        if (ValidResponse != null) {
            for (var key in ValidResponse) {
                _msg += key + ": " + ValidResponse[key][0] + "\n\r"
            }
            // _msg += $errorObject
            _msg = _msg.slice(0, -1)
            return _msg
        } else return 'Undefine error'
    },

}
