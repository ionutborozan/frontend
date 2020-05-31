import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {LoginModel} from "../LoginModel";
import {JsonPrimitive} from "@angular/compiler-cli/ngcc/src/packages/entry_point";
import {UserModel} from "../projects/notification-page/src/lib/notification-page/UserModel";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  rootURL = '/api';

  getUsers() {
    return this.http.get(this.rootURL + '/users');
  }

  login(username: string, password: string) {
	// user.id =
    let loginModel = new LoginModel();
    loginModel.username = username;
    loginModel.password = password;
    loginModel.logedIn = true;
	return this.http.post(this.rootURL + '/login', loginModel);
  }

  logout(username: string, password: string) {
    let loginModel = new LoginModel();
    loginModel.username = username;
    loginModel.password = password;
    return this.http.post(this.rootURL+'/logout',loginModel);
  }



}
