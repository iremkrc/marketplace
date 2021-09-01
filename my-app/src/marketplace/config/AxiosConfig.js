import axios from "axios";
import LocalStorageService from "../util/LocalStorageService";

const localStorageService = LocalStorageService.getService();

// Add a request interceptor
const configure = () => {
    axios.interceptors.request.use(
        config => {
            const token = localStorageService.getToken();
            if (token) {
                config.headers['Authorization'] = 'Bearer ' + token;
            }
            // config.headers['Content-Type'] = 'application/json';
            return config;
        },
        error => {
            Promise.reject(error)
        });
}

export default configure;


