import { NgModule, Type } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ActivityItemComponent } from './components/activity-item/activity-item.component';
import { CreateActivityItemComponent } from './components/create-activity-item/create-activity-item.component';
import { CreateActivityModal } from './modals/create-activity.modal';
import { ActivitiesService } from './services/activities.service';

const MODULES: Type<unknown>[] = [
  SharedModule,
  ReactiveFormsModule
];

const COMPONENTS: Type<unknown>[] = [
  ActivityItemComponent,
  CreateActivityItemComponent,
  CreateActivityModal
];

@NgModule({
  declarations: [ COMPONENTS ],
  imports: [ MODULES ],
  exports: [ MODULES, COMPONENTS ],
  providers: [ ActivitiesService ]
})
export class ActivitiesModule { }
