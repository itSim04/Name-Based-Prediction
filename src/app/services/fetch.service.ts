import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http: HttpClient) { }

  fetchImage() {

    return this.http.get<any>("https://dog.ceo/api/breeds/image/random");

  }

  fetchName() {

    return this.http.get<any>("https://namey.muffinlabs.com/name.json?frequency=all");

  }

}
