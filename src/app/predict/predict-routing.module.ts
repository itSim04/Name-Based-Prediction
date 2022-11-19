import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PredictPage } from './predict.page';

const routes: Routes = [
  {
    path: '',
    component: PredictPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PredictPageRoutingModule {}
