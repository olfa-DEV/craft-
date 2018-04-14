import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../user/user.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user;

  formReg = new FormGroup({
    name : new FormControl('',[Validators.required]),
    lastname : new FormControl('',[Validators.required]),
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required, Validators.minLength(8)]),
    passwordConfirm : new FormControl('', Validators.minLength(8))
  }, this.passwordMatchValidator)


  constructor(private _userService: UserService) { }

  ngOnInit() {
  }

  addUser(user: User){
    this._userService.createUser(user)
    .subscribe(event => console.log('data changed inserted'));   
  }

  submitReg(){
    console.log(this.formReg.value)

    this.user = {
      "name": this.formReg.value.name,
      "username":this.formReg.value.password,
      "email": this.formReg.value.email   
    }

    this.addUser(this.user);

  }

  getErrorMessage(){
    return this.formReg.get('email').hasError('required') ? 'You must enter a value' :
    this.formReg.get('email').hasError('email') ? 'Not a valid email' :
        this.formReg.get('password').hasError('required')?'You must enter a password':
        this.formReg.get('name').hasError('required') ? 'You must enter a value':
        this.formReg.get('lastname').hasError('required') ? 'You must enter a value':'';
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('passwordConfirm').value
       ? null : {'mismatch': true};
 }

}
