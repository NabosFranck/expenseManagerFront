import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './partials/error/error.component';

import { AuthorizationGuard } from './guards/authorization.guard';



const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  
  {
    path: 'auth', loadChildren: () => import('./auth-login/auth-login.module')
      .then(m => m.AuthLoginModule)
  },
  {
    path: '', loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),canActivate:[AuthorizationGuard]
  },
  {
    path: '**', component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
