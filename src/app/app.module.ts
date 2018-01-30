import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {AppRouting} from './app-routing.module';
import {LoginComponent} from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthGuard} from './guards/auth.guard';
import {ApiService} from './services/api.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule, NgForm} from '@angular/forms';
import {AutofocusDirective} from './directives/autofocus.directive';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        RegisterComponent,
        AutofocusDirective
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRouting,
        HttpClientModule,
        FormsModule,
        NgbModule.forRoot(),
    ],
    providers: [AuthGuard, ApiService, HttpClient, NgForm],
    bootstrap: [AppComponent]
})
export class AppModule {
}
