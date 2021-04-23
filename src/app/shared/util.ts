import {isBlank} from 'ngx-cookie';

export const removeMascara = (valor: string): any => {
    if (!isBlank(valor)) {
        valor = valor.replace(/[^\d]/g, '').slice(0, valor.length);
        return valor.trim().length > 0 ? valor : null;
    }
    return valor;
};