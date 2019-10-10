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
  // firstPicture = localStorage.getItem('War');
  // secondPicture = localStorage.getItem('Captain America');
  // thirdPicture = localStorage.getItem('Intersteller');
  // forthPicture = localStorage.getItem('Captain Marval');
  // fifthPicture = localStorage.getItem('Batman');
  // sixthPicture = localStorage.getItem('Badla');
  // warPicture = localStorage.getItem('WarPoster');
  // CaptainAmericaPicture = localStorage.getItem('CaptainAmericaPoster');
  // InterstellerPicture = localStorage.getItem('InterstellerPoster');
  // CaptainMarvalPicture = localStorage.getItem('CaptainMarvalPoster');
  // BatmanhPicture = localStorage.getItem('BatmanPoster');
  // BadlaPicture = localStorage.getItem('BadlaPoster');
  message: any;
  constructor(private service: UserServicesService, private data: DataServicesService, private snackbar: MatSnackBar, private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => {
      this.message = message
    })
    console.log("get message ", this.message);

  }

  home() {
    this.router.navigateByUrl('');
  }

  // trailer() {
  //   const requestObj = {
  //     movieName: this.message.result[0].movieName
  //   }
  //   this.service.moviePost('getTrailer', requestObj).subscribe((data: any) => {
  //     console.log("data : ", data);
  //   })
  // }

  openDialog(): void {
    const dialogRef = this.dialog.open(TrailerDialogComponent, {
      width: '250px',
      data: { trailer: this.message.result[0].trailer, movieName: this.message.result[0].movieName }
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  bookTicket() {

  }
}