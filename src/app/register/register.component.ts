import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

    constructor(private api: ApiService) { }

    ngOnInit() { }

    register(form: NgForm) {
        this.api.register(form.value, (res) => {
            console.log(res);
        }, (err) => {
            console.log(err);
        });
    }

    isFormValid(form: NgForm) {
        const value = form.value;
        return !(value.login && value.password && value.password.length >= 6 && this.isEmail(value.email));
    }

    isEmail(email: string) {
        const regularExp = /\S+@\S+\.\S+/;
        return regularExp.test(email);
    }

}
