import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.scss']
})
export class BookTicketComponent implements OnInit {
  firstName = localStorage.getItem('firstName')
  lastName = localStorage.getItem('lastName')


  constructor(private router: Router, private snackbar: MatSnackBar) { }

  ngOnInit() {
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

  home() {
    this.router.navigateByUrl('');
  }


}