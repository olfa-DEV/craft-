import { Injectable } from '@angular/core';
//import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostService {

  result:any;

  constructor(private _http: HttpClient) { }

  getPosts() {
    return this._http.get("http://localhost:3000/posts");
  }

  getCommentsByPost(id){
    return this._http.get("http://localhost:3000/comments/?postId="+id);
  }
 
  addCommenToPost(id, comment){
    return this._http.post('http://localhost:3000/posts/'+id+'/comments',comment);
  }
}
