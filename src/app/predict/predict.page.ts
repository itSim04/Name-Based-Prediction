import { PredictionService } from './../services/prediction.service';
import { Component } from '@angular/core';
import { PredictionModel } from '../models/prediction.model';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-predict',
  templateUrl: 'predict.page.html',
  styleUrls: ['predict.page.scss']
})
export class PredictPage {

  temp_name: String = "";
  prediction: PredictionModel = { age: 0, gender: "", name: "", nationality: []};

  constructor(private predictionService: PredictionService) { }

  emptyPrediction() : Boolean {

    return this.prediction.age == 0 || this.prediction.name == "" || this.prediction.gender == "" || this.prediction.nationality.length == 0;

  }

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

    this.prediction.age = 0;
    this.prediction.gender = "";
    this.prediction.nationality = [];
    this.prediction.name = this.temp_name;
    this.predictionService.build(this.prediction);

  }

}
