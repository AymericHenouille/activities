import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './components/auth-page.component';
import { ForgetPasswordPageComponent } from './components/forget-password-page/forget-password-page.component';
import { SigninPageComponent } from './components/signin-page/signin-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';

const ROUTES: Routes = [
  { path: '', component: AuthPageComponent, children: [
    { path: 'signin', component: SigninPageComponent },
    { path: 'signup', component: SignupPageComponent },
    { path: 'forget-password', component: ForgetPasswordPageComponent },
    { path: '', redirectTo: 'signin', pathMatch: 'full' }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
