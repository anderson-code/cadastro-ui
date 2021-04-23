import { Component, OnInit } from '@angular/core';
import { Endereco } from '../model';

declare var $: any;

@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.scss']
})
export class ClientsFormComponent implements OnInit {

  endereco: Endereco = new Endereco();

  constructor() { }

  ngOnInit(): void {
    $.fn.datepicker.dates['pt-BR'] = {
      days: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
      daysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
      daysMin: ["Do", "Se", "Te", "Qu", "Qu", "Se", "Sa"],
      months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
      monthsShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
      today: "Hoje",
      monthsTitle: "Meses",
      clear: "Limpar",
      format: "dd/mm/yyyy"
    };
    
    $('.datepicker').datepicker({
      format: 'dd/mm/yyyy',
      autoclose: true,
      language: 'pt-BR',
      todayHighlight: true,
      clearBtn: true,
      zIndexOffset: 1000000
    });
  }

  consultarCep(CEP) {
    let cepSemMascara = removeMascara(CEP);
    if (cepSemMascara != null && cepSemMascara.length >= 8) {
        this.enderecoService.consultarEnderecoPorCep(cepSemMascara).subscribe((res) => {
            this.preencherDadosEndereco(res);
        });
    }
}


}