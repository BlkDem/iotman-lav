import rest_api from "../rest_api";

export default {

        dataItems: [],

        getGeviceTypeData() {
            // console.log(rest_api.api_device_types_read)
            return axios.get(rest_api.api_device_types_read)
        },


        async getItems() {
            console.log(await this.getGeviceTypeData())
        },


        // getItems() {
        //     this.getGeviceTypeData()
        //     return this.dataItems
        // }
}
