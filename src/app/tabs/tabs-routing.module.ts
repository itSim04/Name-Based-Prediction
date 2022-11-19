import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'predict',
        loadChildren: () => import('../predict/predict.module').then(m => m.PredictPageModule)
      },
      {
        path: 'welcome',
        loadChildren: () => import('../welcome/welcome.module').then(m => m.WelcomePageModule)
      },
      {
        path: 'global',
        loadChildren: () => import('../global/global.module').then(m => m.GlobalPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/welcome',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/welcome',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
