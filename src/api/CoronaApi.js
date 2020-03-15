import BaseApi from './BaseApi';

class CoronaApi extends BaseApi {

    static getAllCountry() {
        const api = new BaseApi();
        api.call(api.https().get(`http://api.coronatracker.com/v2/analytics/country`));
        return api;
    }

}

export default CoronaApi;