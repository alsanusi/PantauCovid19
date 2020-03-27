import BaseApi from './BaseApi';

class CoronaApi extends BaseApi {

    static getIndonesianProvinceData() {
        const api = new BaseApi();
        api.call(api.https().get(`https://api.kawalcorona.com/indonesia/provinsi`));
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

    static getIndonesiaSummaryData() {
        const api = new BaseApi();
        api.call(api.https().get(`https://api.kawalcorona.com/indonesia`));
        return api;
    }

}

export default CoronaApi;