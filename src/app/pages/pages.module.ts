import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  { path: 'activities', loadChildren: () => import('./activities-page/activities-page.module').then(m => m.ActivitiesPageModule) },
  { path: '', redirectTo: 'activities', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class PagesModule { }
