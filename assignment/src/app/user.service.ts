import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {

  result:any;

  constructor(private _http: Http) { }
  
  getUsers() {
    return this._http.get("https://jsonplaceholder.typicode.com/users")
      .map(result => this.result = result.json());
  } 
 
//
 // getUsers()
 // {
  //  fetch('https://jsonplaceholder.typicode.com/posts')
   // .then(response => response.json())
   // .then(json => console.log(json))
  //}

 /*getUsers() {
 fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(json => console.log(json))
} 
*/
}
