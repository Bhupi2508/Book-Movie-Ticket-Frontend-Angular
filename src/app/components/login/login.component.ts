import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserServicesService } from '../../services/userServices/user-services.service'
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = false;
  email = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._]+@[a-zA-Z]+.[a-zA-Z]+$')]);
  password = new FormControl('', [Validators.minLength(6), Validators.required])
  data: {};
  emailAddress: any;
  token: any;
  name: any;

  constructor(private service: UserServicesService, private snackbar: MatSnackBar, private router: Router) { }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('pattern') ? 'Not a valid email' :
        '';
  }
  passwordError() {
    return this.password.hasError('minlength') ? 'should be of minimum of 6 digits' :
      this.password.hasError('required') ? 'password cannot be empty' :
        ''
  }

  submit() {
    this.data = {
      email: this.email.value,
      password: this.password.value
    }
    console.log("Data in submit", this.data)
    this.service.post('login', this.data).subscribe((result: any) => {

      console.log("loginResponse data==>", result);
      this.emailAddress = result.message[0].email
      this.name = result.message[0].firstname
      this.token=result.token
      localStorage.setItem('loginmail', this.emailAddress)
      localStorage.setItem('loginToken', this.token)
      localStorage.setItem('name', this.name)
      this.snackbar.open('Login Successfull', 'End now', { duration: 1000 });
      this.router.navigateByUrl('');

    },
      error => {
        console.log("error", error);
        this.snackbar.open('error in login', 'End now', { duration: 1000 });
      }
    )
  }
}
