import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { MatDialogRef, MatDialog } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  res:any;
  
  loginDialogRef : MatDialogRef<LoginDialogComponent>;

  form1 = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  constructor(private _userService: UserService,private router: Router, private dialog: MatDialog) { }

  

  getErrorMessage() {
    return this.form1.get('email').hasError('required') ? 'You must enter a value' :
    this.form1.get('email').hasError('email') ? 'Not a valid email' :
        this.form1.get('password').hasError('required')?'You must enter a password':
        '';
  }
  ngOnInit() {
  }

  display(){
    
    this._userService.getUser(this.form1.value.email, this.form1.value.password).subscribe((res)=>{
      console.log(res);
      this.res = res;
      if (this.res.length != 0 )
      {
        this.router.navigate(['users'])
      }
      else
      this.loginDialogRef = this.dialog.open(LoginDialogComponent);
    })
  }

}
