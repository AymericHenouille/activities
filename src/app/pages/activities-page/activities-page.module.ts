import { NgModule } from '@angular/core';
import { ActivitiesModule } from 'src/app/features/activities/activities.module';
import { ActivitiesRoutingModule } from './activities-routing.module';
import { ActivitiesDetailsPageComponent } from './components/activities-details-page/activities-details-page.component';
import { ActivitiesPageComponent } from './components/activities-page/activities-page.component';

@NgModule({
  declarations: [ ActivitiesPageComponent, ActivitiesDetailsPageComponent ],
  imports: [ ActivitiesModule, ActivitiesRoutingModule ]
})
export class ActivitiesPageModule { }
