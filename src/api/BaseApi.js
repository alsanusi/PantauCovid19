import axios from 'axios';
import { cacheAdapterEnhancer, throttleAdapterEnhancer } from 'axios-extensions';

class BaseApi {

    basicConfigs = {
        adapter: throttleAdapterEnhancer(cacheAdapterEnhancer(axios.defaults.adapter)),
    }

    // Base Http
    http = axios.create({
        // headers: {
        //     'Access-Control-Allow-Origin': '*',
        // },
        ...this.basicConfigs
    });

    https() {
        return this.http;
    }

    // Request
    requests = [];
    request() {
        return this.requests[0];
    }

    // Call Request
    call(request) {
        this.requests = [request];
        return this;
    }

    // Request Result
    then(callback) {
        this.request()
            .then(response => this.onThen(response, callback))
            .catch((e) => this.onCatch(e, callback));
    }

    onThen(response, callback = {}) {
        const {
            success,
            fail,
            complete
        } = callback;
        if (response.data) {
            if (success)
                success(response);
        } else if (fail) {
            fail(response);
        }
        if (complete)
            complete(response);
    }

    onCatch(e, callback = {}) {
        const {
            error,
            complete
        } = callback;
        if (e.response && e.response.status === 401) {
            error(e)
        }
        if (error)
            error(e)
        if (complete)
            complete(null, e);
    }
}

export default (BaseApi);