import {Component} from '@angular/core';
import {routerTransition} from './router.animations';
import {ApiService} from './services/api.service';

@Component({
    selector: 'app-root',
    animations: [routerTransition],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(private api: ApiService) {
        //
    }

    getState(outlet) {
        return outlet.activatedRouteData.state;
    }

    isLoggedIn() {
        return this.api.isLoggedIn();
    }

    logout() {
        this.api.logout();
    }

}
