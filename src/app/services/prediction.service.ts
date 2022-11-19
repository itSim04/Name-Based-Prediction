import { PredictionModel } from './../models/prediction.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {

  constructor(private http: HttpClient) { }
  
  private predictGender(name: String) {

    return this.http.get<any>(`https://api.genderize.io?name=${name}`);

  }

  private predictAge(name: String) {

    return this.http.get<any>(`https://api.agify.io/?name=${name}`);

  }

  private predictNationality(name: String) {

    return this.http.get<any>(`https://api.nationalize.io/?name=${name}`);

  }

  build(prediction: PredictionModel): PredictionModel {

    this.predictAge(prediction.name).subscribe(

      response => prediction.age = <Number>response.age

    );

   this.predictNationality(prediction.name).subscribe(

      response => {

        prediction.nationality = (<any[]>response.country).map(t => t.country_id);
        
      });

    this.predictGender(prediction.name).subscribe(

      response => prediction.gender = <String>response.gender

    );

    return prediction;

  }

}
