import BaseApi from './BaseApi';

class CoronaApi extends BaseApi {

    static getIndonesianData() {
        const api = new BaseApi();
        api.call(api.https().get(`http://api.coronatracker.com/v2/analytics/country`));
        return api;
    }

    static getWorldData() {
        const api = new BaseApi();
        api.call(api.https().get(`http://api.coronatracker.com/v2/stats`));
        return api;
    }

}

export default CoronaApi;