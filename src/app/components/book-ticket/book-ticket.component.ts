import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataServicesService } from "../../services/dataServices/data-services.service";

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.scss']
})
export class BookTicketComponent implements OnInit {
  firstName = localStorage.getItem('firstName')
  lastName = localStorage.getItem('lastName')
  message: any;


  constructor(private router: Router, private snackbar: MatSnackBar, private data: DataServicesService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => {
      this.message = message
    })
  }

  takeData() {
    {
      if (("#Numseats").valueOf().length == 0) {
        this.snackbar.open('Please Number of Seats', 'End now', { duration: 1500 });
      }
      // else {
      //   (".inputForm *").prop("disabled", true);
      //   (".seatStructure *").prop("disabled", false);
      //   document.getElementById("notification").innerHTML = "<b style='margin-bottom:0px;background:yellow;'>Please Select your Seats NOW!</b>";
      // }
    }
  }

  profile() {
    this.router.navigateByUrl('profile');
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('login');
  }

  home() {
    this.router.navigateByUrl('');
  }


}
