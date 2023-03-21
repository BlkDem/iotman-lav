export default {

    ERROR_LEVEL_INFO: 0,
    ERROR_LEVEL_WARNING: 1,
    ERROR_LEVEL_ERROR: 2,

    addslashes( str ) {
        return (str + '').replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0');
    },

    getError($errorObject) {

        let ValidResponse = ($errorObject.response.data != null) ? $errorObject.response.data : ''
        let ValidMessage = ($errorObject.message != null) ? $errorObject.message : ''
        let ResponseDataMessage = ($errorObject.response.data.message != null) ? $errorObject.response.data.message : ''
        let _msg = ""

        console.log($errorObject.response.data)
        // if (ValidResponse != null) {
            for (let key in ValidResponse) {
                if ((key != 'trace')&&(key != 'exception')&&(key != 'file'))
                _msg += key + ": " + this.addslashes(ValidResponse[key]) + "\n\r"
            }
            // _msg += ValidMessage + "\n\r"
            // _msg += ResponseDataMessage + "\n\r"
            // _msg = _msg.slice(0, -1)
            console.log(_msg)
            return _msg
        // } else return 'Undefine error'
    },

}
