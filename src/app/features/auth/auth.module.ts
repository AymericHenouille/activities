import { NgModule, Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormFrameComponent } from './components/form-frame/form-frame.component';
import { SigninFormComponent } from './components/signin-form/signin-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';

const MODULES: Type<unknown>[] = [
  SharedModule,
  ReactiveFormsModule,
  RouterModule,
  FormsModule
];

const COMPONENTS: Type<unknown>[] = [
  SignupFormComponent,
  SigninFormComponent
];

@NgModule({
  declarations: [COMPONENTS, FormFrameComponent],
  imports: [MODULES],
  exports: [MODULES, COMPONENTS],
})
export class AuthModule { }
