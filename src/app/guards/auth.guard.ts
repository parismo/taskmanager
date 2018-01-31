import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {ApiService} from '../services/api.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private api: ApiService) {
        //
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        if (next.data.requireLogin && this.api.isLoggedIn() === false) {
            this.router.navigate(['']);
            return false;
        } else {
            if (this.api.isLoggedIn() === true && (next.routeConfig.path === 'login' || next.routeConfig.path === 'register')) {
                this.router.navigate(['home']);
            }
            return true;
        }

    }

}
