import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AlertaService } from 'src/app/shared/alerta/alerta.service';
import { EnderecoService } from 'src/app/shared/endereco/endereco.service';
import { ErrorHandlerService } from 'src/app/shared/erro/error-handler.service';
import { removeMascara } from 'src/app/shared/util';
import { ClientsService } from '../clients.service';
import { Cliente, Endereco, Uf, Licenca } from '../model';
import * as moment from 'moment';
import { Router } from '@angular/router';


declare var $: any;

@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.scss']
})
export class ClientsFormComponent implements OnInit {

  cliente: Cliente = new Cliente();
  vencimentoLicenca: string;
  ufs: Array<Uf> = new Array<Uf>();

  constructor(private clientsService: ClientsService ,
    private enderecoService: EnderecoService,
    private router: Router,     
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
//    }).on('input change', e => $("input[name='inptVencimentoLicenca']").val(e.target.value));
    }).on('input change', e => {
      this.vencimentoLicenca = e.target.value;
      let data = moment(e.target.value, 'DD/MM/YYYY', true);
      if(data.isValid()) {
        this.cliente.licenca.vencimentoLicenca = data.toDate(); 
      } else {
        this.cliente.licenca.vencimentoLicenca = undefined;
      }
    });

    this.enderecoService.listarUfs().subscribe(
       (res:any) => {
         console.log(res);
         res.forEach(uf => {
           this.ufs.push(uf);
         });
       } 
    );

    this.limparEntidades();
  }

  consultarCep(cep) {
    let cepSemMascara = removeMascara(cep);
    if (cepSemMascara != null && cepSemMascara.length >= 8) {
        this.enderecoService.consultarEnderecoPorCep(cepSemMascara).subscribe((res) => {
            this.preencherDadosEndereco(res);
        },
        erro => {
          if(erro.status == '404') {
            this.cliente.endereco = new Endereco();
            this.cliente.endereco.cep = cep;
          }
        });
    }
  }

  preencherDadosEndereco(endereco: any) {
    this.cliente.endereco.logradouro = endereco.logradouro;
    this.cliente.endereco.bairro = endereco.bairro;
    this.cliente.endereco.municipio = endereco.municipio;
    this.cliente.endereco.uf = this.ufs.filter((uf:Uf) => uf.codigo == endereco.uf)[0];
  }

  salvar(value: any) {
    console.log(this.cliente);
    this.clientsService.cadastrar(this.cliente).subscribe(res => {
        this.alertService.exibirSucesso('Cliente cadastrado com sucesso!');
        this.limparEntidades();
        this.router.navigate(['/clients']);              
      },
      erro => this.errorHandler.handle(erro)
    );
  }

  private limparEntidades() {
    this.cliente = new Cliente();
    this.cliente.licenca = new Licenca();
    this.cliente.endereco = new Endereco();
  }

}