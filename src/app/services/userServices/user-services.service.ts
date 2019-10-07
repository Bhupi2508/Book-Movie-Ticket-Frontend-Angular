import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {
  baseUrl = environment.baseUrl
  value: string;

  constructor(private http: HttpClient) { }

  post(url, data) {
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

  moviePost(url, data) {
    console.log("url : ", url);
    console.log("data : ", data);
    this.value = "movieName"

    return this.http.post(this.baseUrl + url, this.value + data)
  }

  getMethod(url) {
    return this.http.get(this.baseUrl + url)
  }
}
