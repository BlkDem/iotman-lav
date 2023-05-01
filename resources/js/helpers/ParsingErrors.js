export default {

    ERROR_LEVEL_INFO: 0,
    ERROR_LEVEL_WARNING: 1,
    ERROR_LEVEL_ERROR: 2,

    addslashes( str ) {
        return (str + '').replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0');
    },

    getError(errorObject) {

        let errDump = [];

        errDump.push('<h5>' + errorObject.message + '</h5></br>');

        let ValidMessage = (errorObject.response.data.message != null) ? errorObject.response.data.message : 'No message'

        if (typeof ValidMessage === 'object') {
            for (let message in ValidMessage) {
                errDump.push('<strong>' +message + '</strong>: ' + ValidMessage[message].toString().replace(',' , '!') + '</br>')
            }
        } else {
            errDump.push(JSON.stringify(ValidMessage))
        }

        return errDump.reduce((acc, item) => acc + ' ' + item)
    },

}
