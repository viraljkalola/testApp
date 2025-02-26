import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  email = new FormControl("",[Validators.required, Validators.email]);
  password = new FormControl("",[Validators.required, Validators.minLength(6)]);

  logInForm = new FormGroup({
    email : this.email,
    password : this.password
  })


  logIn(){
    console.log(this.logInForm.value);
  }

}
