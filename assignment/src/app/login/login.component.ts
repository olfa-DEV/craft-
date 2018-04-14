import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  

  form1 = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  constructor(private _userService: UserService,private router: Router) { }

  

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
      if (res != null)
      {
        this.router.navigate(['users'])
      }
      else
      alert("You're not subscribed")
    })
  }

}
