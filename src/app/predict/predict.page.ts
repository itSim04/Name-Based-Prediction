import { PredictionService } from './../services/prediction.service';
import { Component } from '@angular/core';
import { PredictionModel } from '../models/prediction.model';

@Component({
  selector: 'app-predict',
  templateUrl: 'predict.page.html',
  styleUrls: ['predict.page.scss']
})
export class PredictPage {

  prediction: PredictionModel = { age: 0, gender: "", name: "", nationality: [], isEmpty: () => { return this.prediction.age == 0 || this.prediction.name == "" || this.prediction.gender == "" } };

  constructor(predictionService: PredictionService) { }

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

    return this.prediction.gender;

  }

  get age(): Number {

    return this.prediction.age;

  }

  predict() {


  }

}
