import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { LoginComponent } from '../pages/login/login.component';
import { AuthService } from './guard/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';
import { AuthGuard } from './guard/auth.guard';

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
    ReactiveFormsModule,
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
    AuthService
  ]
})
export class SecurityModule { }
