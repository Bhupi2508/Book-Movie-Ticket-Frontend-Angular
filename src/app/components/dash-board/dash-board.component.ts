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
  rating: any;
  arr = [];
  body = {};

  constructor(private service: UserServicesService, private data: DataServicesService, private snackbar: MatSnackBar, private router: Router) { }

  ngOnInit() {
    this.imagesUrl = [
      "../../../assets/ant-man-5.jpg",
      "../../../assets/venom-3.jpg",
      "../../../assets/HarryPotter-2.jpg",
      "../../../assets/captain-2.jpg",
      "../../../assets/blackPanther-1.jpg",
      "../../../assets/jokerForSlide.jpg",
      "../../../assets/TheMartianForSlider.jpg",
      "../../../assets/warForSlide-1.jpg"
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

  movies(test) {
    // this.data = {
    //   movieName: test
    // }
    const requestObj = {
      movieName: test
    };
    // var a = JSON.stringify(requestObj)
    this.service.moviePost('getMovie', requestObj).subscribe((data: any) => {
      console.log("length", data);

      // for (let i = 0; i <= data.result.length; i++) {
      // localStorage.setItem('War', data.result[0].movieName)
      // localStorage.setItem('Captain America', data.result[1].movieName)
      // localStorage.setItem('Intersteller', data.result[2].movieName)
      // localStorage.setItem('Captain Marval', data.result[3].movieName)
      // localStorage.setItem('Batman', data.result[4].movieName)
      // localStorage.setItem('Badla', data.result[5].movieName)
      // localStorage.setItem('WarPoster', data.result[0].poster)
      // localStorage.setItem('CaptainAmericaPoster', data.result[1].poster)
      // localStorage.setItem('InterstellerPoster', data.result[2].poster)
      // localStorage.setItem('CaptainMarvalPoster', data.result[3].poster)
      // localStorage.setItem('BatmanPoster', data.result[4].poster)
      // localStorage.setItem('BadlaPoster', data.result[5].poster)

      this.data.changeMessage(data);
      this.router.navigateByUrl('movieDetail')

    })
  }
}