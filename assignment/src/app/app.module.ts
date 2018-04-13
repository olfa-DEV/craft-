import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

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


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDialogComponent,
    LoginComponent,
    DeletionDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [UserService],
  entryComponents: [UserDialogComponent, DeletionDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
