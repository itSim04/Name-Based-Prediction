import { PredictionService } from './../services/prediction.service';
import { Component } from '@angular/core';
import { PredictionModel } from '../models/prediction.model';

@Component({
  selector: 'app-predict',
  templateUrl: 'predict.page.html',
  styleUrls: ['predict.page.scss']
})
export class PredictPage {

  available_prediction: Boolean = false;
  prediction: PredictionModel = { age: 0, gender: "", name: "", nationality: []};

  constructor(private predictionService: PredictionService) { }


  get name(): String {

    return this.prediction.name;

  }

  get nationality(): String {

    let result: String = "";
    this.prediction.nationality.forEach(

      t => result += t + " "

    );
    return result.trim();

  }

  get gender(): String {

    return this.prediction.gender.charAt(0).toUpperCase() + this.prediction.gender.slice(1);

  }

  get age(): Number {

    return this.prediction.age;

  }

  predict() {

    this.available_prediction = true;
    this.predictionService.build(this.prediction);

  }

}
