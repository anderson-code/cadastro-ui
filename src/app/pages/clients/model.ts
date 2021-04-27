export class Cliente {
    id: number;
    nomeFantasia: string;
    razaoSocial: string;
    cnpj: string;
    inscricaoEstadual: string;
    inscricaoMunicipal: string;
    telefone: string;
    celular: string;
    email: string;
    endereco: Endereco;
    licenca: Licenca;
}

export class Endereco {
    logradouro: string;
    numero: string;
    complemento: string;
    bairro: string;
    cep: string;
    municipio: string;
    uf: Uf;
}

export class Uf {
    codigo: string;
    estado: string;
}

export class Licenca {
    id: number;
    quantidadePdvs: number;
    valorPorPdv: number;
    periodoRenovacao: string;
    vencimentoLicenca: Date;
}
  
  