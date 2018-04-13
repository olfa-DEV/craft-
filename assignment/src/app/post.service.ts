import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

  result:any;

  constructor(private _http: Http) { }

  getPosts() {
    return this._http.get("http://localhost:3000/posts")
      .map(result => this.result = result.json());
  }

  getCommentsByPost(id){
    return this._http.get("http://localhost:3000/comments/?postId="+id)
    .map(result => this.result = result.json());
  }
 
  addCommenToPost(id, comment){
    return this._http.post('http://localhost:3000/posts/'+id+'/comments',comment)
    .map((res)=>{
      console.log(res);
      return res.json()
    })
  }
}
