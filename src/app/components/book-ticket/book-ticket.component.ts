import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.scss']
})
export class BookTicketComponent implements OnInit {
  firstName = localStorage.getItem('firstName')
  lastName = localStorage.getItem('lastName')

  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  takeData(){
    
  }

  home() {
    this.router.navigateByUrl('');
  }
  

}
