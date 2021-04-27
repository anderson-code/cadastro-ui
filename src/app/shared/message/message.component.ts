import { Component, Input } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { EnderecoService } from '../endereco/endereco.service';

@Component({
  selector: 'app-message',
  template: `
  <span *ngIf="temErro()" class="ui-messages-error">
    {{ text }}
  </span>
`,
  styles: [`
  .ui-messages-error {
    display: block;
    margin: 0;
    margin-top: 4px;
    color: #dd4b39;
  }
`]
})
export class MessageComponent {

  @Input() error: string;
  @Input() control: FormControl;
  @Input() text: string;
  @Input() submit: boolean;

  temErro(): boolean {
   // console.log(this.control);
    return this.control.hasError(this.error) && (this.control.dirty || this.submit);
    //return this.control.hasError(this.error) && this.control.dirty  && (this.control.touched || this.form.submitted);
  }


}
