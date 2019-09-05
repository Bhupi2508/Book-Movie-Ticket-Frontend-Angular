import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {
  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  post(url, data) {
    // const httpOption = {
    //   headers: new HttpHeaders({
    //     'Authorization': ""
    //   })
    // }
    return this.http.post(this.baseUrl + url, data)
  }

  resetPost(url, data) {
    const httpOption = {
      headers: new HttpHeaders({
        'Headers': localStorage.getItem('token')
      })
    }
    return this.http.post(this.baseUrl + url, data, httpOption)
  }
}
