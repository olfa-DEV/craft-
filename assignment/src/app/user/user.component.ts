import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {MatPaginator, MatSort, MatTableDataSource, MatDialogRef, MatDialog} from '@angular/material';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: any[];
  editedUser;

  displayedColumns = ['name', 'username', 'email','actions'];
  dataSource: MatTableDataSource<User>; 

  userDialogRef: MatDialogRef<UserDialogComponent>;

  constructor(private _userService: UserService, private dialog: MatDialog) { }

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
 
updateUser(user: User)
{
  this._userService.update(user);
}

onEdit(row)
{
  console.log(row);

  this.userDialogRef = this.dialog.open(UserDialogComponent,{
    hasBackdrop: false,
    data: {
      username: row.username,
      name: row.name,
      email: row.email,
      street: row.address.street
    }
  });

  this.userDialogRef.afterClosed().subscribe(result => {
    console.log(result);
    
    this.editedUser = new User(row.id, result.col1.name, result.col1.username, result.col1.street);
    this.editedUser.displayUser();

    this._userService.update(this.editedUser);

    this.getUsers();
    
});
}

onDelete(row)
{
  console.log(row);
}

}

export class User{
 
  constructor(
    public id: number,
    public name: string = '',
    public username: string = '',
    public street: string = '')
    {}

    displayUser()
    {
      console.log(this.id + " "+ this.name+" "+ this.username +" "+ this.street);
    }
  
}

