import { PredictionService } from './../services/prediction.service';
import { FetchService } from './../services/fetch.service';
import { Component } from '@angular/core';
import { PredictionModel } from '../models/prediction.model';

@Component({
  selector: 'app-global',
  templateUrl: 'global.page.html',
  styleUrls: ['global.page.scss']
})
export class GlobalPage {

  predictions: PredictionModel[] = [];
  constructor(private fetchService: FetchService, private predictionService: PredictionService) {

    setInterval(() => fetchService.fetchName().subscribe(
      
      response => {
        
        this.predictions.push(predictionService.build(response);
        
      }), 2000);
      

  }

}
