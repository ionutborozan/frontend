import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {LoginModel} from "./model/LoginModel";
import {Observable} from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private httpClient: HttpClient) {
    }

    doLogin(username:string,password:string) {
        const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        let body = new HttpParams();
        body = body.set('username', username);
        body = body.set('password', password);
        this.httpClient
            .post('http://localhost:8080/cont/login', body, {
                headers: myheader
    });

       //  let params = new HttpParams();
       //  params.append("username",username);
       //  params.append("password",password);
       // this.httpClient.post<Observable<any>>('http://localhost:8080/cont/login',null,{params});
    }

    public doLogout(username: string) {

    }
}
