import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { NbLogoutComponent } from '@nebular/auth';


const routes: Routes = [
    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    },
    {
        path: '', component: LayoutComponent, // localhost:4200/auth
        children: [
            { path: 'login', component: LoginComponent}, //localhost:4200/auth/login
            { path: 'logout', component: NbLogoutComponent}
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthLoginRoutingModule { }
