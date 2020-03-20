import BaseApi from './BaseApi';

class CoronaApi extends BaseApi {

    static getIndonesianData() {
        const api = new BaseApi();
        api.call(api.https().get(`http://api.coronatracker.com/v2/analytics/country`));
        return api;
    }

    static getGlobalData() {
        const api = new BaseApi();
        api.call(api.https().get(`http://api.coronatracker.com/v2/stats`));
        return api;
    }

    static getTopListData() {
        const api = new BaseApi();
        api.call(api.https().get(`http://api.coronatracker.com/v2/stats/top`));
        return api;
    }

}

export default CoronaApi;