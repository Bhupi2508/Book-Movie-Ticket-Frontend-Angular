import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserServicesService } from '../../services/userServices/user-services.service'

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
  firstname = localStorage.getItem('firstname')
  lastname = localStorage.getItem('lastname')
  email = localStorage.getItem('loginmail')
  token = localStorage.getItem('loginToken')
  name = localStorage.getItem('name')
  imagesUrl: string[];

  constructor(private service: UserServicesService, private snackbar: MatSnackBar, private router: Router) { }

  ngOnInit() {
    this.imagesUrl = [
      "../../../assets/slider.jpg",
      '../../../assets/lion_king_xlg.jpg',
      '../../../assets/terminator.jpg',
    ];
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('login');
  }

  profile() {
    this.router.navigateByUrl('profile');
  }

}
