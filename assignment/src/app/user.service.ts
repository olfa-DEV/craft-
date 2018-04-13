import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from './user/user.component';


@Injectable()
export class UserService {

  result:any;

  constructor(private _http: Http) { }
  
  getUsers() {
    return this._http.get("http://localhost:3000/users")
      .map(result => this.result = result.json());
  } 
 
  update(user : User){
    return this._http.patch("http://localhost:3000/users/"+user.id, user)
  }

  delete(user : User){
    return this._http.delete("http://localhost:3000/users/"+user.id)
  }
}
