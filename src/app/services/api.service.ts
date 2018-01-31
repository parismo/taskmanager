import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class ApiService {

    constructor(private http: HttpClient, private router: Router) {
        //
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

    isLoggedIn(): boolean {

        let status = false;

        if (localStorage.getItem('token')) {
            const token = localStorage.getItem('token').split('.');
            if (token.length === 3) {
                const data = JSON.parse(atob(token[1]));
                if ((data.exp * 1000) > new Date().getTime()) {
                    status = true;
                } else {
                    console.warn('jwt.token', 'token expired');
                }
            } else {
                console.warn('jwt.token', 'wrong numbers of segments');
            }
        }

        return status;

    }

    logout() {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
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
