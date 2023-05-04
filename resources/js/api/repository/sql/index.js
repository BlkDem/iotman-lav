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

}
