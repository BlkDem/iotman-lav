export default {
    abs: "1234",

    getError($data) {
        var JSON_Obj = $data
        var _msg = ""
        for (var key in JSON_Obj) {
            _msg += key + ": " + JSON_Obj[key][0] + "\n\r"
        }
        return _msg.slice(0, -1)
    },

}
