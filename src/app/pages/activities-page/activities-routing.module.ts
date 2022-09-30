import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesDetailsPageComponent } from './components/activities-details-page/activities-details-page.component';
import { ActivitiesPageComponent } from './components/activities-page/activities-page.component';

const ROUTES: Routes = [
  { path: '', component: ActivitiesPageComponent, pathMatch: 'full' },
  { path: ':id', component: ActivitiesDetailsPageComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(ROUTES) ],
  exports: [ RouterModule ]
})
export class ActivitiesRoutingModule { }
