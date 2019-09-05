import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserServicesService } from '../../services/userServices/user-services.service'
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  hide = false;
  password = new FormControl('', [Validators.minLength(6), Validators.required])
  confirmPassword = new FormControl('', [Validators.minLength(6), Validators.required])
  data: { password: any; confirmPassword: any; };

  constructor(private service: UserServicesService, private snackbar: MatSnackBar, private router: Router, private activeRoute: ActivatedRoute) { }
  accessToken = this.activeRoute.snapshot.paramMap.get('token')
  ngOnInit() {
    console.log("accessToken in resetPassword", this.accessToken);
    localStorage.setItem('token', this.accessToken)
  }

  passwordError() {
    return this.password.hasError('minlength') ? 'should be of minimum of 6 digits' :
      this.password.hasError('required') ? 'password cannot be empty' :
        ''
  }

  confirmPasswordError() {
    return this.confirmPassword.hasError('minlength') ? 'should be of minimum of 6 digits' :
      this.confirmPassword.hasError('required') ? 'password cannot be empty' :
        ''
  }

  submit() {
    this.data = {
      password: this.password.value,
      confirmPassword: this.confirmPassword.value
    }
    console.log("Data in submit", this.data)
    this.service.resetPost('resetPassword', this.data).subscribe((result: any) => {

      console.log("resetPasswordResponse data==>", result);
      this.snackbar.open('reset Password Successfull', 'End now', { duration: 1000 });
      this.router.navigateByUrl('dashBoard');

    },
      error => {
        console.log("error", error);
        this.snackbar.open('error in resetPassword', 'End now', { duration: 1000 });
      }
    )
  }
}
