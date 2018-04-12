import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from './user/user.component';


@Injectable()
export class UserService {

  result:any;

  constructor(private _http: Http) { }
  
  getUsers() {
    return this._http.get("https://jsonplaceholder.typicode.com/users")
      .map(result => this.result = result.json());
  } 
 
  update(user : User){
    return this._http.put("https://jsonplaceholder.typicode.com/users/"+user.id, user)
  }
}
