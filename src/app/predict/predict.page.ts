import { Component } from '@angular/core';
import { PredictionModel } from '../models/prediction.model';

@Component({
  selector: 'app-predict',
  templateUrl: 'predict.page.html',
  styleUrls: ['predict.page.scss']
})
export class PredictPage {

  prediction: PredictionModel = { age: 0, gender: "", name: "", nationality: [], isEmpty: () => {return this.prediction.age == 0 || this.prediction.name == "" || this.prediction.gender == ""}};

  constructor() {}

  

}
