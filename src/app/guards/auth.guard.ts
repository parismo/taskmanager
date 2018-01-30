import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

    private isLoggedIn = false;

    constructor(private router: Router) {
        //
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        if (next.data.requireLogin && !this.isLoggedIn) {
            this.router.navigate(['']);
            return false;
        } else {
            if (this.isLoggedIn && (next.routeConfig.path === 'login' || next.routeConfig.path === 'register')) {
                this.router.navigate(['home']);
            }
            return true;
        }

    }

}
