import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GlobalPage } from './global.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { GlobalPageRoutingModule } from './global-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    GlobalPageRoutingModule
  ],
  declarations: [GlobalPage]
})
export class GlobalPageModule {}
