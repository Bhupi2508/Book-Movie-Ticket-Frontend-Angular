import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserServicesService } from '../../services/userServices/user-services.service';
import { DataServicesService } from "../../services/dataServices/data-services.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  firstPicture = localStorage.getItem('War');
  secondPicture = localStorage.getItem('Captain America');
  thirdPicture = localStorage.getItem('Intersteller');
  forthPicture = localStorage.getItem('Captain Marval');
  fifthPicture = localStorage.getItem('Batman');
  sixthPicture = localStorage.getItem('Badla');
  warPicture = localStorage.getItem('WarPoster');
  CaptainAmericaPicture = localStorage.getItem('CaptainAmericaPoster');
  InterstellerPicture = localStorage.getItem('InterstellerPoster');
  CaptainMarvalPicture = localStorage.getItem('CaptainMarvalPoster');
  BatmanhPicture = localStorage.getItem('BatmanPoster');
  BadlaPicture = localStorage.getItem('BadlaPoster');
  message: any;
  constructor(private service: UserServicesService, private data: DataServicesService, private snackbar: MatSnackBar, private router: Router) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => {
      this.message = message
    })
    console.log("get message ", this.message);

  }

  home() {
    this.router.navigateByUrl('');
  }

}