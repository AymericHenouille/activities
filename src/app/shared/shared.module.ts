import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { MaterialModule } from './material/material.module';

const MODULES: (Type<unknown> | ModuleWithProviders<unknown>)[] = [
  CommonModule,
  MaterialModule
];

@NgModule({
  imports: [MODULES],
  exports: [MODULES]
})
export class SharedModule { }
