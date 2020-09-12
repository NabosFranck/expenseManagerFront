import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLoginRoutingModule } from './auth-login-routin.module';
import { FormsModule } from '@angular/forms';
import { NbAlertModule, NbInputModule, NbButtonModule, NbCheckboxModule, NbLayoutModule, NbCardModule } from '@nebular/theme';
import { NbAuthModule } from '@nebular/auth';

import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [LayoutComponent, LoginComponent],
  imports: [
    CommonModule,
    AuthLoginRoutingModule,
    FormsModule,
    NbLayoutModule,
    NbCardModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NbAuthModule,
  ]
})
export class AuthLoginModule { }
