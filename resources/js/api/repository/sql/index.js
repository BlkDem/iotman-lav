export default {

    async execute(method = 'get', _api, values) {
        let data = {};
        switch (method) {
            case 'get':
                data = await axios.get(_api);
                break;
            case 'post':
                data = await axios.post(_api, values);
                break;
            case 'put':
                data = await axios.put(_api, values);
                break;
            case 'patch':
                data = await axios.patch(_api, values);
                break;
            case 'delete':
                data = await axios.delete(_api);
                break;
        }

        return data.data;

    },

    async getData(_api) {
        const data = await axios.get(_api);
        return data.data;
    },

}
