import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {MatPaginator, MatSort, MatTableDataSource, MatDialogRef, MatDialog} from '@angular/material';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';
import { DeletionDialogComponent } from '../deletion-dialog/deletion-dialog.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: any[];
  editedUser;
  userToDelete;

  displayedColumns = ['name', 'username', 'email','actions'];
  dataSource: MatTableDataSource<User>; 

  userDialogRef: MatDialogRef<UserDialogComponent>;
  deletionDialogRef: MatDialogRef<DeletionDialogComponent>;

  constructor(private _userService: UserService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers()
{
  console.log("get users method");
  this._userService.getUsers().subscribe(
    (resData) =>{
      this.dataSource = new MatTableDataSource(resData)
    });
}
 
updateUser(user: User)
{
  console.log("edit method");
  this._userService.update(user).subscribe(event =>
    {
      console.log('data changed inserted');
      this.getUsers();

    }
  );
}

deleteUser(user: User)
{
  console.log("deletion method");
  this._userService.delete(user).subscribe(event =>
    {
      console.log('data deleted');
      this.getUsers();

    }
  );
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

    this.updateUser(this.editedUser);

    
});
}

onDelete(row)
{
  console.log(row);

  this.deletionDialogRef = this.dialog.open(DeletionDialogComponent);

  this.deletionDialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
    if(result == 'yes')
    {
        console.log("confirmation");

        this.userToDelete = new User(row.id, row.name, row.username, row.address.street );
        this.deleteUser(this.userToDelete); 
    }
    
});

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

