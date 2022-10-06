import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { AppPageComponent } from './app-page.component';

const ROUTES: Routes = [
  { path: 'auth', loadChildren: () => import('./auth-page/auth-page.module').then(m => m.AuthPageModule) },
  {
    path: '', component: AppPageComponent, canActivate: [AuthGuard], children: [
      { path: 'activities', loadChildren: () => import('./activities-page/activities-page.module').then(m => m.ActivitiesPageModule) },
      { path: '', redirectTo: 'activities', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  declarations: [ AppPageComponent ],
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class PagesModule { }
