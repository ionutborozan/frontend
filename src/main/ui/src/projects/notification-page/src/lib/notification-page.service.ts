import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DataAccesModel} from "./notification-page/DataAccesModel";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class NotificationPageService {

    constructor(private http: HttpClient) {
    }

}
