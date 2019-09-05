import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserServicesService } from '../../services/userServices/user-services.service'
import { Router } from "@angular/router";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._]+@[a-zA-Z]+.[a-zA-Z]+$')]);
  data: { email: any; };

  constructor(private service: UserServicesService, private snackbar: MatSnackBar, private router: Router) { }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('pattern') ? 'Not a valid email' :
        '';
  }

  submit() {
    this.data = {
      email: this.email.value
    }
    console.log("Data in submit", this.data)
    this.service.post('forgotPassword', this.data).subscribe((result: any) => {

      console.log("forgotPasswordResponse data==>", result);
      this.snackbar.open('Mail sent to your mail Id', 'End now', { duration: 1000 })

    },
      error => {
        console.log("error", error);
        this.snackbar.open('error in forgotPassword', 'End now', { duration: 1000 });
      }
    )
  }
}
