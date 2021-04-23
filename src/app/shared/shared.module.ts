import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message/message.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';

@NgModule({
  declarations: [MessageComponent],
  imports: [
    CommonModule
  ],
  exports: [MessageComponent]
})
export class SharedModule { }
