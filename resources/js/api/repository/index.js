import SQLdata from "../repository/sql"
import noSQLdata from "../repository/nosql"

export default {

    async getData(_api) {

        if (typeof _api === 'string') return await SQLdata.getData(_api);
        if (typeof _api === 'object') return await noSQLdata.getData(_api);

    },

    async execute(method='get', _api, values='') {

        // console.log('method', method);
        if (typeof _api === 'string') return await SQLdata.execute(method, _api, values);
        if (typeof _api === 'object') return await noSQLdata.execute(method, _api, values);

    },

}
