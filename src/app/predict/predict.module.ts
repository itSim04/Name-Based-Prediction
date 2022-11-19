import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PredictPage } from './predict.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PredictPageRoutingModule } from './predict-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    PredictPageRoutingModule
  ],
  declarations: [PredictPage]
})
export class PredictPageModule {}
