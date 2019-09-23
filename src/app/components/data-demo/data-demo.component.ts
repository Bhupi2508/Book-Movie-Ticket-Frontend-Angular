// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Apollo } from 'apollo-angular';
// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map'
// import 'rxjs/Rx';
// import {map} from 'rxjs/operators';
// import gql from 'graphql-tag';
// //import { environment } from '../../../environments/environment';
// //import { map } from "rxjs/operators";
// import { Instruction, Query } from '../../types'

// @Component({
//   selector: 'app-data-demo',
//   templateUrl: './data-demo.component.html',
//   styleUrls: ['./data-demo.component.scss']
// })
// export class DataDemoComponent implements OnInit {
//   instruction: Observable<Instruction[]>
//   arrData: String[]
//   // baseUrl = environment.baseUrl
//   constructor(private apollo: Apollo) {
//     this.arrData = []
//   }

//   ngOnInit() {
//     this.instruction = this.apollo.watchQuery<Query>({
//       query: gql`
//      query paymentInstruction{
//        paymentInstruction(instructionId:"65702063245-80123508"){
//         instructionId
//         option
//        }
//      }`
//     })
//       .valueChanges
//       .pipe(
//         map(result => result.data.paymentInstruction)
//       )
//   }

//   displayData() {
//     const getData = gql`
//     {
//   paymentInstruction(instructionId: "65702063245-80123508") {
//     instructionId
//     option
//       channelSeqId
//     }
//   }
// }
// `

//     this.paymentInstruction = this.apollo
//       .watchQuery({
//         query: getData
//       })
//       .valueChanges.map(result => this.paymentInstruction)
//       .subscribe(data => {
//         console.log("Data in Response", data);
//       })
//   }

// }

import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
//import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map'
import 'rxjs/Rx';
@Component({
  selector: 'app-data-demo',
   templateUrl: './data-demo.component.html',
   styleUrls: ['./data-demo.component.scss']
})
export class DataDemoComponent implements OnInit {
  courses: any;
  status: any
  arrdata: any[];
  constructor(private apollo: Apollo) { }
  ngOnInit() {
    const getPaymentPurpose = gql`
   query paymentInstruction{
      paymentInstruction(instructionId:"65702063245-80123508"){
       instructionId
       option
      }
   }
 `;
    this.apollo
      .watchQuery({
        query: getPaymentPurpose
      })
      .valueChanges.map((result: any) => result.data.paymentPurposes)
      .subscribe(data => {
        console.log("dadadsad", data);
        this.arrdata = data;
        console.log("new data==>", this.arrdata);
      });
  }
}