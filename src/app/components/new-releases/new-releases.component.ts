import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserServicesService } from '../../services/userServices/user-services.service'
import { Router } from "@angular/router";

@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.component.html',
  styleUrls: ['./new-releases.component.scss']
})
export class NewReleasesComponent implements OnInit {

  constructor(private service: UserServicesService, private snackbar: MatSnackBar, private router: Router) { }

  ngOnInit() {
  }

  home() {
    this.router.navigateByUrl('');
  }

}
