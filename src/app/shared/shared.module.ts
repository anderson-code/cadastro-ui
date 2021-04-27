import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message/message.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { FormsModule } from '@angular/forms';
import { CnpjValidator } from './validators/cnpj-validator';


@NgModule({
  declarations: [MessageComponent, CnpjValidator],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [MessageComponent, CnpjValidator]
})
export class SharedModule { }
