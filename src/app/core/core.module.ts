import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FireModule } from './fire/fire.module';

const MODULES: (Type<unknown> | ModuleWithProviders<unknown>)[] = [
  BrowserModule,
  BrowserAnimationsModule,
  FireModule
];

@NgModule({
  imports: [MODULES],
  exports: [MODULES],
})
export class CoreModule { }
