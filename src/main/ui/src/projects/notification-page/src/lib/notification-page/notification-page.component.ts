import {Component, Input, OnInit} from '@angular/core';
import {DataAccesModel} from "./DataAccesModel";
import {NotificationPageService} from "../notification-page.service";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
    selector: 'lib-notification-page',
    templateUrl: './notification-page.component.html',
    styleUrls: ['./notification-page.component.css']
})
export class NotificationPageComponent implements OnInit {
    data: DataAccesModel[] = [];
    tableView:string[] = ['name','phone','lastAcces','accesPerday'];
    constructor(private http: HttpClient,
                private router:Router) {
    }

    ngOnInit() {

        this.http.get<DataAccesModel[]>('/api/notification').subscribe(
                res => {
                    this.data = res;
                },error => {
                    alert("An alert occured");
                }
            );
    }

    goBack() {
        this.router.navigate(['/homepage']);
    }


}
