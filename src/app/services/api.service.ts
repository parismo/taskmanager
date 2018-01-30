import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest} from '@angular/common/http';

@Injectable()
export class ApiService {

    constructor(private http: HttpClient) {
    }

    private call(url, method, data, onSuccess, onError) {

        const request = new HttpRequest(method, url, data);

        this.http.request(request).subscribe((res) => {
            if (res.type !== 0) {
                onSuccess(res);
            }
        }, (err) => {
            onError(err);
        });

    }

    login(data, onSuccess, onError) {
        return this.call('http://www.mocky.io/v2/5a7083623300001239ff5cf6', 'POST', data, onSuccess, onError);
    }

    register(data, onSuccess, onError) {
        return this.call('http://www.mocky.io/v2/5a7077c2330000e932ff5cb1', 'POST', data, onSuccess, onError);
    }

    getTasks(onSuccess, onError) {
        return this.call('http://www.mocky.io/v2/5a7076313300001432ff5ca8', 'GET', {}, onSuccess, onError);
    }

}
