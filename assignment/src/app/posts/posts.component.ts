import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {


  displayedColumns = ['title', 'body','actions'];
  dataSource: MatTableDataSource<Post>; 

  constructor(private _postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts()
  {
    this._postService.getPosts().subscribe(
      (resData) =>{
        this.dataSource = new MatTableDataSource(resData)
      });
  }

  explore(row)
  {}
}

export class Post{
 
  constructor(
    public userId: number,
    public id: number,
    public title: string = '',
    public body: string = '')
    {}
  
}