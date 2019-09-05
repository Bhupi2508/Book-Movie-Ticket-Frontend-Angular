import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserServicesService } from '../../services/userServices/user-services.service'
import { Router } from "@angular/router";
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  hide = false;
  firstName = new FormControl('', Validators.required);
  lastName = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._]+@[a-zA-Z]+.[a-zA-Z]+$')]);
  password = new FormControl('', [Validators.minLength(6), Validators.required])
  data: {};
  firstname: any;
  lastname: any;
  emailAddress: any;

  constructor(private service: UserServicesService, private snackbar: MatSnackBar,private router:Router) { }

  ngOnInit() {
  }

  firstNameError() {
    return this.firstName.hasError('required') ? 'You must enter a value' : '';
  }
  lastNameError() {
    return this.lastName.hasError('required') ? 'You must enter a value' : '';
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
      firstname: this.firstName.value,
      lastname: this.lastName.value,
      email: this.email.value,
      password: this.password.value
    }
    console.log("Data in submit", this.data)
    this.service.post('signup', this.data).subscribe((result: any) => {

      console.log("response data==>", result);
      this.firstname = result.message.firstname
      this.lastname = result.message.lastname
      this.emailAddress = result.message.email
      localStorage.setItem('firstname', this.firstname)
      localStorage.setItem('lastname', this.lastname)
      localStorage.setItem('email', this.emailAddress)
      this.snackbar.open('Registration Successfull', 'End now', { duration: 1000 });
      this.router.navigateByUrl('login');

    },
      error => {
        console.log("error", error);
        this.snackbar.open('error in register', 'End now', { duration: 1000 });
      }
    )
  }

}
