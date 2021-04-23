import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {of} from 'rxjs/internal/observable/of';
import {catchError, map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import { PegHttp } from '../../seguranca/peg-http';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  private resourceUrl = environment.API_URL + '/api/pessoa/endereco';

  constructor(private http: PegHttp) {
  }

  listarUfs(): Observable<any> {
    return this.http.get(`${this.resourceUrl}/listarUnidadesFederativas`);
  }

  consultarEnderecoPorCep(cep: string): Observable<any> {
    if (cep.length < 8) {
      return of(null);
    }
    return this.http.get(`${this.resourceUrl}/${cep}`).pipe(
        catchError(err => {
          return throwError(err);
        }));
  }
}
