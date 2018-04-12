import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: any[];

  displayedColumns = ['name', 'username', 'email'];
  dataSource: MatTableDataSource<User>; 

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers()
{
  this._userService.getUsers().subscribe(
    (resData) =>{
      this.dataSource = new MatTableDataSource(resData)
    });
}

}

export interface User{
  name: string;
  username: string;
  email: string;
}

