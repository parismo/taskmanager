import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ApiService} from '../services/api.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    // only for test
    private jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' +
        'eyJ1c2VybmFtZSI6InBhcmlzbW8iLCJleHAiOjE1MTk3MzQ2MDAsInVzZXJfaWQiOjEsImVtYWlsIjoibWFyZWtAcGFyaXNtb3N0dWRpby5jb20ifQ.' +
        'xMM49h22PGgEcclD_g1vZYHyWK50G581XjMBrWW4YoY';

    constructor(private api: ApiService, private router: Router) {
        console.log('on constructor LoginComponent');
    }

    ngOnInit() {
        console.log('on init LoginComponent');
    }

    login(form: NgForm) {
        this.api.login(form.value, (res) => {
            localStorage.setItem('token', this.jwt);
            this.router.navigate(['/home']);
        }, (err) => {
            console.log(err);
        });
    }

}
