import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministrationPage } from './administration.page';

const routes: Routes = [
  {
    path: '',
    component: AdministrationPage,
    children: [
      {
        path: 'president',
        loadComponent: () => import('./president/president.component').then(m => m.PresidentComponent)
      }
      // Add other administration routes here
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrationPageRoutingModule {}
