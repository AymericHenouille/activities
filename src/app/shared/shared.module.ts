import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { MaterialModule } from './material/material.module';

const MODULES: (Type<unknown> | ModuleWithProviders<unknown>)[] = [
  CommonModule,
  MaterialModule
];

const COMPONENTS: Type<unknown>[] = [

];

@NgModule({
  declarations: [COMPONENTS],
  imports: [MODULES],
  exports: [MODULES, COMPONENTS],
})
export class SharedModule { }
