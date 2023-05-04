import { errorEvent } from "../../errors"

export default {

    async getData(_api) {
        try {
            const _data = await axios.get(_api);
            return _data.data;
        } catch(e) {
            errorEvent(e);
        }
    },

    async execute(method='get', _api, values) {

        try {
            let data = {};
            switch (method) {
                case 'get': data = await axios.get(_api); break;
                case 'post': data = await axios.post(_api, values); break;
                case 'put': data = await axios.put(_api, values); break;
                case 'patch': data = await axios.patch(_api, values); break;
                case 'delete': data = await axios.delete(_api); break;
            }

            return data.data;
        } catch(e) {
            errorEvent(e);
        }
    },
}
