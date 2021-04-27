import { Directive } from '@angular/core';
import {FormControl, NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[cnpj][ngModel]', 
  providers: [
    {
      provide: NG_VALIDATORS, 
      useValue: cnpjValidator,
      multi: true
    }
  ]
})
export class CnpjValidator {}

function cnpjValidator(control: FormControl) {
  let cnpj = control.value;
    
  if (cnpj == '' || cnpj == undefined) 
    return false;
  
  cnpj = cnpj.replace(/[^\d]+/g,'');
  if (cnpj.length != 14)
    return false;
  // LINHA 10 - Elimina CNPJs invalidos conhecidos
  if (cnpj == "00000000000000" || 
      cnpj == "11111111111111" || 
      cnpj == "22222222222222" || 
      cnpj == "33333333333333" || 
      cnpj == "44444444444444" || 
      cnpj == "55555555555555" || 
      cnpj == "66666666666666" || 
      cnpj == "77777777777777" || 
      cnpj == "88888888888888" || 
      cnpj == "99999999999999")
      return {
        cnpj: {
          parsedCnpj: cnpj
        }
      }

  // Valida DVs LINHA 23 -
  let tamanho = cnpj.length - 2
  let numeros = cnpj.substring(0,tamanho);
  let digitos = cnpj.substring(tamanho);
  let soma = 0;
  let pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
          pos = 9;
  }
  let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado != digitos.charAt(0))
    return {
      cnpj: {
        parsedCnpj: cnpj
      }
    }

  tamanho = tamanho + 1;
  numeros = cnpj.substring(0,tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
          pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado != digitos.charAt(1))
    return {
      cnpj: {
        parsedCnpj: cnpj
      }
    }
    return null; 
}