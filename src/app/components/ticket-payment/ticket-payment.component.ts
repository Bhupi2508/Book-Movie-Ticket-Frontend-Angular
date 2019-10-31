import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserServicesService } from '../../services/userServices/user-services.service';
import { DataServicesService } from "../../services/dataServices/data-services.service";
import { Router } from "@angular/router";
import { TrailerDialogComponent } from '../trailer-dialog/trailer-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-ticket-payment',
  templateUrl: './ticket-payment.component.html',
  styleUrls: ['./ticket-payment.component.scss']
})
export class TicketPaymentComponent implements OnInit {
  movieName = new FormControl('', Validators.required);
  firstName = localStorage.getItem('firstName')
  message: any;

  constructor(private service: UserServicesService, private data: DataServicesService, private snackbar: MatSnackBar, private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
  }

  profile() {
    this.router.navigateByUrl('profile');
  }

  home() {
    this.router.navigateByUrl('');
  }

  Search() {
    const requestObj = {
      movieName: this.movieName.value
    };
    this.service.moviePost('getMovie', requestObj).subscribe((data: any) => {
      this.data.changeMessage(data);

      this.router.navigateByUrl('movieDetail')
    })
  }

}
