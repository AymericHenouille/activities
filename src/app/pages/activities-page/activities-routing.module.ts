import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesPageComponent } from './components/activities-page/activities-page.component';

const ROUTES: Routes = [
  { path: '', component: ActivitiesPageComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forChild(ROUTES) ],
  exports: [ RouterModule ]
})
export class ActivitiesRoutingModule { }
