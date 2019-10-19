import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserServicesService } from '../../services/userServices/user-services.service';
import { DataServicesService } from "../../services/dataServices/data-services.service";
import { Router } from "@angular/router";
import { TrailerDialogComponent } from '../trailer-dialog/trailer-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movieName = new FormControl('', Validators.required);
  firstName = localStorage.getItem('firstName')
  message: any;

  constructor(private service: UserServicesService, private data: DataServicesService, private snackbar: MatSnackBar, private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => {
      this.message = message
    })
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

  profile() {
    this.router.navigateByUrl('profile');
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TrailerDialogComponent, {
      width: '960px',
      data: { trailer: this.message.result[0].trailer, movieName: this.message.result[0].movieName }
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  Ticket() {
    this.router.navigateByUrl('bookTicket');
  }
}