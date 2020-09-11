import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientsFormComponent } from './clients-form/clients-form.component';
import { TableModule } from 'primeng/table';
import { NgxMaskModule, IConfig } from 'ngx-mask'

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    ClientsListComponent,
    ClientsFormComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    NgxMaskModule.forRoot(),
    TableModule
  ]
})
export class ClientsModule { }
