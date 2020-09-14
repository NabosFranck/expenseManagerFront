import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbMenuModule, NbUserModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HeaderComponent } from './partials/header/header.component';
import { ErrorComponent } from './partials/error/error.component';

import { HttpClientModule } from '@angular/common/http';
import { NbPasswordAuthStrategy, NbAuthModule, NbAuthJWTToken } from '@nebular/auth';
import {  IntercepteurApiProvider } from './interceptors/intercepteur-api.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorComponent,
    
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    HttpClientModule,
    NbUserModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          baseEndpoint: 'http://127.0.0.1:8000',
          token: {
            class: NbAuthJWTToken,
            key: 'token',
          },
          login: {
            endpoint: '/apip/login_check',
            method: 'post',
            redirect: {
              success: 'Home',
              failure: null
            }
          },
          logout: {
            endpoint: '/logout',
            method: 'delete',
            redirect: {
              success: 'auth/login',
              failure: null
            }
          }
        }),
      ],
      forms: {},
    }),
  ],
  providers: [IntercepteurApiProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
