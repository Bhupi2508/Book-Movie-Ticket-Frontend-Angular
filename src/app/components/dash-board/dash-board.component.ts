import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { Router } from "@angular/router";
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserServicesService } from '../../services/userServices/user-services.service';
import { DataServicesService } from "../../services/dataServices/data-services.service";
//import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
  movieName = new FormControl('', Validators.required);
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

  Search() {
    const requestObj = {
      movieName: this.movieName.value
    };
    this.service.moviePost('getMovie', requestObj).subscribe((data: any) => {
      this.data.changeMessage(data);
      console.log("data",data);
      
      this.router.navigateByUrl('movieDetail')
    })
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

  movielist(){
    this.router.navigateByUrl('movies');
  }

  booking(){
    this.router.navigateByUrl('payment');
  }

  movies(test) {
    const requestObj = {
      movieName: test
    };
    this.service.moviePost('getMovie', requestObj).subscribe((data: any) => {
      this.data.changeMessage(data);
      this.router.navigateByUrl('movieDetail')
    })
  }
}