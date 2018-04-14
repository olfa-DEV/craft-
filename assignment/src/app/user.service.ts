import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from './user/user.component';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class UserService {

  result:any;

  constructor(private _http: HttpClient) { }
  
  getUsers() {
    return this._http.get("http://localhost:3000/users")
  } 
 
  update(user : User){
    return this._http.patch("http://localhost:3000/users/"+user.id, user)
  }

  delete(user : User){
    return this._http.delete("http://localhost:3000/users/"+user.id) 
  }


  getUser(email, pwd){
    return this._http.get("http://localhost:3000/users?email="+email+"&&username="+pwd)
  }

  createUser(user : User){
    return this._http.post("http://localhost:3000/users", user)
  }

}
