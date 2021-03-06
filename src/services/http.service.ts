import {AppConfig} from "../configurations/app-config";
import axios, {AxiosPromise} from "axios";

export class HttpService {

    private readonly BASE_URL = AppConfig.BASE_URL;
    static instance: HttpService;
    private _axios = axios;

    static getInstance() {
        if(HttpService.instance === undefined) {
            HttpService.instance = new HttpService();
        }
        return HttpService.instance;
    }

    get<T>(url: string): AxiosPromise {
        return this._axios.get<T>(`${this.BASE_URL}${url}`);
    }

}
