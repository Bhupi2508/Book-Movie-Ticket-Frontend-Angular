import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataServicesService } from "../../services/dataServices/data-services.service";
import { UserServicesService } from 'src/app/services/userServices/user-services.service';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.scss']
})
export class BookTicketComponent implements OnInit {
  firstName = localStorage.getItem('firstName')
  lastName = localStorage.getItem('lastName')
  message: any;
  ReadOnlyStyleGuideNotes: boolean;
  seat: any[];
  newdata: any[];


  constructor(private service: UserServicesService, private router: Router, private snackbar: MatSnackBar, private data: DataServicesService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => {
      this.message = message
    })
    
    this.ReadOnlyStyleGuideNotes = true;

    this.payment()
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

  payment() {
    const requestObj = {
      movieName: this.message.result[0].movieName
    };
    this.service.moviePost('getSeatBooked', requestObj).subscribe((data: any) => {
      console.log("gadsgdfasd==>",data);
      this.newdata=data.result[0].bookedSeat;
      
      for (let i = 0; i < data.result[0].bookedSeat.length; i++) {
        this.seat = data.result[0].bookedSeat[i]
      //  if(this.seat===["A1","A2"]){
      //   this.ReadOnlyStyleGuideNotes = true;
      //  }
        console.log("this.seat", this.seat);
      }

      this.data.changeMessage(data);
      // this.router.navigateByUrl('payment');
    })

  }



  logout() {
    localStorage.clear();
    this.router.navigateByUrl('login');
  }

  home() {
    this.router.navigateByUrl('');
  }


}
