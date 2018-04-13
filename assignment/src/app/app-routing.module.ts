import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CommentComponent } from './comment/comment.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [

  {
    path: 'users',
    component : UserComponent
  },
  {
    path: 'posts',
    component : PostsComponent
  },
  {
    path: 'posts/:id',
    component : CommentComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
