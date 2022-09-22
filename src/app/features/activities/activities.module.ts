import { NgModule, Type } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

const MODULES: Type<unknown>[] = [
  SharedModule
];

const COMPONENTS: Type<unknown>[] = [

];

@NgModule({
  declarations: [ COMPONENTS ],
  imports: [ MODULES ],
  exports: [ MODULES, COMPONENTS ]
})
export class ActivitiesModule { }
