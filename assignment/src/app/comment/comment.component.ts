import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {


  displayedColumns = ['name', 'body'];
  dataSource: MatTableDataSource<Comment>; 
  comment;
  showSpinner: boolean = false;
  comm;
  postID;

  constructor(private _route : ActivatedRoute, private _postService: PostService) { }

  ngOnInit() {
    this._route.paramMap.subscribe(params =>
    {
      let id = params.get('id');
      this.postID = id;
      this.getComments(id);
    })
  }

  getComments(id)
  {
    this._postService.getCommentsByPost(id).subscribe(
      (resData) =>{
        this.dataSource = new MatTableDataSource(resData)
      });
  }

  addComment(){
    this.showSpinner = true;
    this.comm = {
      "name": "Olfa Souahlia",
      "email":"olfa@gmail.com",
      "body" : this.comment
    }
    this._postService.addCommenToPost(this.postID,this.comm).subscribe(
      (res)=>
      {
        console.log(res);
        this.getComments(this.postID);
      })
    setTimeout(() => {
     console.log(this.comment)
      this.showSpinner = false;
    }, 1000);
    
  }

}

export class Comment{
 
  constructor(
    public postId: number,
    public id: number,
    public name: string = '',
    public email: string = '',
    public body: string = '')
    {}

}
