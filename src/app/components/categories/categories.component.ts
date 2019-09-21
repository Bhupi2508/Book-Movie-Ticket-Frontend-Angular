import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserServicesService } from '../../services/userServices/user-services.service'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(private service: UserServicesService, private snackbar: MatSnackBar, private router: Router) { }

  ngOnInit() {
  }

  home() {
    this.router.navigateByUrl('');
  }
}
