import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  clientes: any[];

  constructor() { }

  ngOnInit(): void {

    this.clientes = [
      { nomeFantasia: 'Makro Atacadista', razaoSocial: 'Makro Atacadista', cnpj: '00000000000000', telefone: '9999999999' },
      { nomeFantasia: 'Makro Atacadista', razaoSocial: 'Makro Atacadista', cnpj: '00000000000000', telefone: '99999999999' },
      { nomeFantasia: 'Makro Atacadista', razaoSocial: 'Makro Atacadista', cnpj: '00000000000000', telefone: '99999999999' },
      { nomeFantasia: 'Makro Atacadista', razaoSocial: 'Makro Atacadista', cnpj: '00000000000000', telefone: '99999999999' },
      { nomeFantasia: 'Makro Atacadista', razaoSocial: 'Makro Atacadista', cnpj: '00000000000000', telefone: '99999999999' },
      { nomeFantasia: 'Makro Atacadista', razaoSocial: 'Makro Atacadista', cnpj: '00000000000000', telefone: '99999999999' },
      { nomeFantasia: 'Makro Atacadista', razaoSocial: 'Makro Atacadista', cnpj: '00000000000000', telefone: '99999999999' },
      { nomeFantasia: 'Makro Atacadista', razaoSocial: 'Makro Atacadista', cnpj: '00000000000000', telefone: '99999999999' },
      { nomeFantasia: 'Makro Atacadista', razaoSocial: 'Makro Atacadista', cnpj: '00000000000000', telefone: '99999999999' },
      { nomeFantasia: 'Makro Atacadista', razaoSocial: 'Makro Atacadista', cnpj: '00000000000000', telefone: '99999999999' },
      { nomeFantasia: 'Makro Atacadista', razaoSocial: 'Makro Atacadista', cnpj: '00000000000000', telefone: '99999999999' },
      { nomeFantasia: 'Makro Atacadista', razaoSocial: 'Makro Atacadista', cnpj: '00000000000000', telefone: '99999999999' },
      { nomeFantasia: 'Makro Atacadista', razaoSocial: 'Makro Atacadista', cnpj: '00000000000000', telefone: '99999999999' },
      { nomeFantasia: 'Makro Atacadista', razaoSocial: 'Makro Atacadista', cnpj: '00000000000000', telefone: '99999999999' },
      { nomeFantasia: 'Makro Atacadista', razaoSocial: 'Makro Atacadista', cnpj: '00000000000000', telefone: '99999999999' },
      { nomeFantasia: 'Makro Atacadista', razaoSocial: 'Makro Atacadista', cnpj: '00000000000000', telefone: '99999999999' },
      { nomeFantasia: 'Makro Atacadista', razaoSocial: 'Makro Atacadista', cnpj: '00000000000000', telefone: '99999999999' },
      { nomeFantasia: 'Makro Atacadista', razaoSocial: 'Makro Atacadista', cnpj: '00000000000000', telefone: '99999999999' },
      { nomeFantasia: 'Makro Atacadista', razaoSocial: 'Makro Atacadista', cnpj: '00000000000000', telefone: '99999999999' }
    ];
  }
}
