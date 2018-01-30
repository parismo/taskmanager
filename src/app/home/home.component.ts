import {Component, OnInit} from '@angular/core';
import {TaskModel} from '../models/task.model';
import {ApiService} from '../services/api.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public tasks = Array<TaskModel>();

    constructor(private api: ApiService) {

        this.api.getTasks((res) => {
            console.log('res', res);
            this.tasks = res.body;
        }, (err) => {
            console.log('err', err);
        });

        // const task = new TaskModel();
        // task.id = 1;
        // task.title = 'Test';
        // task.description = 'Some quick example text to build on the card title and make up the bulk of the card\'s content';
        // task.status = 200;
        // task.createdAt = '2012-01-01 12:12:12';
        // this.tasks.push(task);
        //
        // console.log('on constructor HomeComponent');
    }

    ngOnInit() {
        console.log('on init HomeComponent');

    }

}
