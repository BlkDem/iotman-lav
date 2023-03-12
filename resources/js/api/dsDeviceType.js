import rest_api from "./rest_api";

export default {

        dataItems: [],

        getGeviceTypeData() {
            return axios.get(rest_api.api_device_types_read)
        },


        async getItems() {
            console.log(await this.getGeviceTypeData())
        },

}
