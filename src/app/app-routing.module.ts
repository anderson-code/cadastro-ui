import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { AuthGuard } from './security/guard/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('./security/security.module').then(m => m.SecurityModule)
      }
    ]
  },
  {
    path: '',                       
    component: FullComponent,
    canActivate: [AuthGuard], 
    children: [
        {path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        {path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)},
        {path: 'clients', loadChildren: () => import('./pages/clients/clients.module').then(m => m.ClientsModule)},
        {path: '**', redirectTo: 'pagina-nao-encontrada' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
