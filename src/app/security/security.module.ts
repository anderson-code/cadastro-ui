import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { LoginComponent } from '../pages/login/login.component';
import { AuthService } from './guard/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';
import { AuthGuard } from './guard/auth.guard';
import { ErrorHandlerService } from '../shared/erro/error-handler.service';
import { ControlHttp } from './control-http';
import { ConfirmationService, MessageService } from 'primeng/api';
import { RouterModule } from '@angular/router';


/*
export function tokenGetter() {
  return localStorage.getItem('token');
}
*/

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    SecurityRoutingModule,
  /*  JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: environment.tokenWhitelistedDomains,
        blacklistedRoutes: environment.tokenBlacklistedRoutes
      }
    }),*/

  ],
  providers: [
    AuthGuard,
    AuthService,
    ControlHttp,
    ErrorHandlerService,
    ConfirmationService,
    MessageService,
  ]
})
export class SecurityModule { }
