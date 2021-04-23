import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AlertaService } from 'src/app/shared/alerta/alerta.service';
import { EnderecoService } from 'src/app/shared/endereco/endereco.service';
import { ErrorHandlerService } from 'src/app/shared/erro/error-handler.service';
import { removeMascara } from 'src/app/shared/util';
import { ClientsService } from '../clients.service';
import { Cliente, Endereco } from '../model';

declare var $: any;

@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.scss']
})
export class ClientsFormComponent implements OnInit {

  cliente: Cliente = new Cliente();
  endereco: Endereco = new Endereco();
  
  constructor(private clientsService: ClientsService ,
    private enderecoService: EnderecoService,     
    private errorHandler: ErrorHandlerService,
    private alertService: AlertaService) { }

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

  consultarCep(cep) {
    let cepSemMascara = removeMascara(cep);
    if (cepSemMascara != null && cepSemMascara.length >= 8) {
        this.enderecoService.consultarEnderecoPorCep(cepSemMascara).subscribe((res) => {
            this.preencherDadosEndereco(res);
        },
        erro => {
          if(erro.status == '404') {
            this.endereco = new Endereco();
            this.endereco.cep = cep;
          }
        });
    }
  }

  preencherDadosEndereco(endereco: any) {
    this.endereco.logradouro = endereco.logradouro;
    this.endereco.bairro = endereco.bairro;
    this.endereco.municipio = endereco.municipio;
    this.endereco.uf = endereco.uf;
    this.endereco.estado = endereco.estado;
  }

  salvar(value: any) {
    this.setarCliente(value);
    this.clientsService.cadastrar(this.cliente).subscribe(res => {
        this.alertService.exibirSucesso('Dados gravados com sucesso!');
      },
      erro => this.errorHandler.handle(erro)
    );


   /* this.alunoEgressoService.alterar(this.entidade).subscribe(res => {
            this.alunoEgressoChange.emit(res);
            this.alertService.exibirSucesso('Dados gravados com sucesso!');
            this.exibirFormularioDadosGerais = false;
        },
        erro => this.errorHandler.handle(erro)
    );
    */
  }

  private setarCliente(value: any) {
    this.cliente.nomeFantasia=value.nomeFantasia;
    this.endereco.cep = value.inptCEP;
    this.endereco.logradouro = value.inptLogradouro;
    this.endereco.numero = value.inptNumero;
    this.endereco.complemento = value.inptComplemento;
    this.endereco.municipio = value.inptMunicipio;
    this.endereco.uf = value.inptUf;

  }


}