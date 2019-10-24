import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserServicesService } from '../../services/userServices/user-services.service';
import { DataServicesService } from "../../services/dataServices/data-services.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movieName = new FormControl('', Validators.required);
  firstName = localStorage.getItem('firstName')

  constructor(private service: UserServicesService, private data: DataServicesService, private snackbar: MatSnackBar, private router: Router) { }

  ngOnInit() {
  }

  Search() {
    const requestObj = {
      movieName: this.movieName.value
    };
    this.service.moviePost('getMovie', requestObj).subscribe((data: any) => {
      this.data.changeMessage(data);
      console.log("data", data);

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
