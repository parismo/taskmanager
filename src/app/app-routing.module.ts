import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {AuthGuard} from './guards/auth.guard';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: '', redirectTo: 'login', pathMatch: 'full'},
            {path: 'login', canActivate: [AuthGuard], component: LoginComponent, data: {requireLogin: false, state: 'login'}},
            {path: 'register', canActivate: [AuthGuard], component: RegisterComponent, data: {requireLogin: false, state: 'register'}},
            {path: 'home', canActivate: [AuthGuard], component: HomeComponent, data: {requireLogin: true, state: 'home'}},
        ])
    ],
    exports: [RouterModule]
})
export class AppRouting {
}
