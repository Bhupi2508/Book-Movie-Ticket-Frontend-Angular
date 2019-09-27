import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserServicesService } from '../../services/userServices/user-services.service';
import { DataServicesService } from "../../services/dataServices/data-services.service";

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
  firstName = localStorage.getItem('firstName')
  imagesUrl: string[];
  details: any;
  releaseDate: any;
  moviename: any;
  rating: any;
  arr = [];

  message: string;

  constructor(private service: UserServicesService, private data: DataServicesService, private snackbar: MatSnackBar, private router: Router) { }

  ngOnInit() {
    this.imagesUrl = [
      "../../../assets/ant-man-5.jpg",
      "../../../assets/venom-3.jpg",
      "../../../assets/HarryPotter-2.jpg",
      "../../../assets/captain-2.jpg",
      "../../../assets/blackPanther-1.jpg"
    ];

    this.data.currentMessage.subscribe(message => this.message = message)
  }

  home() {
    this.router.navigateByUrl('');
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('login');
  }

  profile() {
    this.router.navigateByUrl('profile');
  }

  categorie() {
    this.router.navigateByUrl('categorie');
  }

  movies() {
    console.log("egertfS");

    this.service.getMethod('getMovieDetail').subscribe((data: any) => {

      console.log("response data==>", data.result[0].movieName);
      // this.moviename = result.message.moviename
      // this.rating = result.message.rating
      // this.releaseDate = result.message.releaseDate
      // this.details = result.message.details
      // localStorage.setItem('firstname', this.firstname)
      // localStorage.setItem('lastname', this.lastname)
      // localStorage.setItem('email', this.emailAddress)
      // this.snackbar.open('Registration Successfull', 'End now', { duration: 1000 });
      this.router.navigateByUrl('movieDetail')
    })
  }
}