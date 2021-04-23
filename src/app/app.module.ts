import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { MenuComponent } from './core/components/menu/menu.component';
import { SettingsComponent } from './core/components/settings/settings.component';
import { LoginComponent } from './pages/login/login.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { CoreModule } from './core/core.module';
import { SecurityModule } from './security/security.module';
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './security/auth-interceptor';
import { NgProgressModule } from 'ngx-progressbar';
import { NgProgressHttpModule } from "ngx-progressbar/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ClientsModule } from './pages/clients/clients.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    BlankComponent,
    FullComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,  
    CoreModule,
    SecurityModule,
    DashboardModule,
    ClientsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: environment.tokenWhitelistedDomains,
        blacklistedRoutes: environment.tokenBlacklistedRoutes
      }
    }),
    NgProgressModule.withConfig({
      spinnerPosition: "left",
      color: "#FFC107",
      thick: true
    }),
    NgProgressHttpModule
  ],
  providers: [
   /*{
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
     },*/

  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
