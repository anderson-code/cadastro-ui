import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { AuthGuard } from './security/guard/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        loadChildren: './security/security.module#SecurityModule'
      }
    ]
  },
  {
    path: '',                       
    component: FullComponent,
    canActivate: [AuthGuard], 
    children: [
        {path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        {path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardModule' },
        {path: '**', redirectTo: 'pagina-nao-encontrada' }
    ]
  }, 
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
