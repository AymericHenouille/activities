import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { MaterialModule } from './material/material.module';

const MODULES: (Type<unknown> | ModuleWithProviders<unknown>)[] = [
  CommonModule,
  MaterialModule
];

const COMPONENTS: Type<unknown>[] = [
  AddButtonComponent
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [MODULES],
  exports: [MODULES, COMPONENTS],
})
export class SharedModule { }
