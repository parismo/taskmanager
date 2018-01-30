import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ApiService} from '../services/api.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(private api: ApiService) {
        console.log('on constructor LoginComponent');
    }

    ngOnInit() {
        console.log('on init LoginComponent');
    }

    login(form: NgForm) {
        this.api.login(form.value, (res) => {
            console.log(res);
        }, (err) => {
            console.log(err);
        });
    }

}
