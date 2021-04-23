import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientsFormComponent } from './clients-form/clients-form.component';
import { TableModule } from 'primeng/table';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClientsService } from './clients.service';
import { ErrorHandlerService } from 'src/app/shared/erro/error-handler.service';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    ClientsListComponent,
    ClientsFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,                               
    ReactiveFormsModule,
    SharedModule,
    ClientsRoutingModule,
    NgxMaskModule.forRoot(),
    TableModule
  ],
  providers: [
    ClientsService
  ]
})
export class ClientsModule { }



