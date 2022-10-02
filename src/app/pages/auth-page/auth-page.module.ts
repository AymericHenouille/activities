import { NgModule } from '@angular/core';
import { AuthModule } from 'src/app/features/auth/auth.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthPageComponent } from './components/auth-page.component';
import { SigninPageComponent } from './components/signin-page/signin-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';

@NgModule({
  declarations: [
    AuthPageComponent,
    SigninPageComponent,
    SignupPageComponent
  ],
  imports: [
    AuthModule,
    AuthRoutingModule,
  ]
})
export class AuthPageModule { }
