import BaseApi from './BaseApi';

class CoronaApi extends BaseApi {

    static getIndonesianProvinceData() {
        const api = new BaseApi();
        api.call(api.https().get(`https://cors-anywhere.herokuapp.com/https://api.kawalcorona.com/indonesia/provinsi`));
        return api;
    }

    static getGlobalData() {
        const api = new BaseApi();
        api.call(api.https().get(`https://cors-anywhere.herokuapp.com/http://api.coronatracker.com/v3/stats`));
        return api;
    }

    static getTopListData() {
        const api = new BaseApi();
        api.call(api.https().get(`https://cors-anywhere.herokuapp.com/http://api.coronatracker.com/v3/stats/top`));
        return api;
    }

    static getAllCountryData() {
        const api = new BaseApi();
        api.call(api.https().get(`https://cors-anywhere.herokuapp.com/http://api.coronatracker.com/v2/analytics/country`));
        return api;
    }

    static getIndonesiaSummaryData() {
        const api = new BaseApi();
        api.call(api.https().get(`https://cors-anywhere.herokuapp.com/http://api.coronatracker.com/v3/stats/worldometer/country?countryCode=ID`));
        return api;
    }

    static getDailyIndonesiaData(countryCode, startDate, endDate) {
        const api = new BaseApi();
        api.call(api.https().get(`https://cors-anywhere.herokuapp.com/http://api.coronatracker.com/v3/analytics/trend/country?countryCode=${countryCode}&startDate=${startDate}&endDate=${endDate}`));
        return api;
    }

}

export default CoronaApi;