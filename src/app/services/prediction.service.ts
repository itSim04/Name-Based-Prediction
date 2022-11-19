import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {

  constructor(private http: HttpClient) { }

  predictGender(name: String) {

    return this.http.get<any>(`https://api.genderize.io?name=${name}`);

  }
  
}
