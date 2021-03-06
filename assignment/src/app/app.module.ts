import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserComponent } from './user/user.component';
import { UserService } from './user.service';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DeletionDialogComponent } from './deletion-dialog/deletion-dialog.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './post.service';
import { CommentComponent } from './comment/comment.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDialogComponent,
    LoginComponent,
    DeletionDialogComponent,
    PostsComponent,
    CommentComponent,
    RegisterComponent,
    LoginDialogComponent 
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [UserService, PostService],
  entryComponents: [UserDialogComponent, DeletionDialogComponent, LoginDialogComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
