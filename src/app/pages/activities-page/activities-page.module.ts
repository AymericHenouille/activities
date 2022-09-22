import { NgModule } from '@angular/core';
import { ActivitiesModule } from 'src/app/features/activities/activities.module';
import { ActivitiesRoutingModule } from './activities-routing.module';
import { ActivitiesPageComponent } from './components/activities-page/activities-page.component';

@NgModule({
  declarations: [ ActivitiesPageComponent ],
  imports: [ ActivitiesModule, ActivitiesRoutingModule ]
})
export class ActivitiesPageModule { }
