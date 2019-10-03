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

  constructor(private service: UserServicesService, private data: DataServicesService, private snackbar: MatSnackBar, private router: Router) { }

  ngOnInit() {
    this.imagesUrl = [
      "../../../assets/ant-man-5.jpg",
      "../../../assets/venom-3.jpg",
      "../../../assets/HarryPotter-2.jpg",
      "../../../assets/captain-2.jpg",
      "../../../assets/blackPanther-1.jpg"
    ];

    // this.data.currentMessage.subscribe(message => this.message = message)
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

  movies(war) {
    console.log("egertfS", war);

    this.service.getMethod('getMovieDetail').subscribe((data: any) => {
      console.log("length", data.result.length);



      for (let i = 0; i <= data.result.length; i++) {
        localStorage.setItem('moviename', data.result[i].movieName)
        console.log("warv : ", war);

        // if (war === data.result.movieName) {
        this.data.changeMessage(data);
        this.router.navigateByUrl('movieDetail')
        //  console.log("response data==>", data.result[i].movieName);
        // console.log("response data==>", typeof (data));
        // }
        // this.moviename = result.message.moviename
        // this.rating = result.message.rating
        // this.releaseDate = result.message.releaseDate
        // this.details = result.message.details
        // localStorage.setItem('firstname', this.firstname)
        // localStorage.setItem('lastname', this.lastname)
        // localStorage.setItem('email', this.emailAddress)
        // this.snackbar.open('Registration Successfull', 'End now', { duration: 1000 });

      }
    })
  }
}