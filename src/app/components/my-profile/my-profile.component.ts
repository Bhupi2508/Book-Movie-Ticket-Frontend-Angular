import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserServicesService } from '../../services/userServices/user-services.service'
import { Router } from "@angular/router";

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  emailAddress = localStorage.getItem('emailAddress')
  firstName = localStorage.getItem('firstName')
  lastName = localStorage.getItem('lastName')
  phone = localStorage.getItem('phone')
  gender = localStorage.getItem('gender')
  dateofbirth = localStorage.getItem('dateofbirth')

  constructor(private service: UserServicesService, private snackbar: MatSnackBar, private router: Router) {

  }

  ngOnInit() {
  }

  home() {
    this.router.navigateByUrl('');
  }

  categorie(){
    this.router.navigateByUrl('categorie');
  }
}
