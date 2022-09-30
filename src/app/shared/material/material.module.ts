import { NgModule, Type } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

const MODULES: Type<unknown>[] = [
  MatButtonModule,
  MatIconModule,
  MatCardModule
];

@NgModule({
  imports: [MODULES],
  exports: [MODULES]
})
export class MaterialModule { }
