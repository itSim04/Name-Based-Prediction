import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlobalPage } from './global.page';

const routes: Routes = [
  {
    path: '',
    component: GlobalPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlobalPageRoutingModule {}
