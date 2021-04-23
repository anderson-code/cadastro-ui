import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {of} from 'rxjs/internal/observable/of';
import {catchError, map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import { ControlHttp } from '../../security/control-http';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  private resourceUrl = environment.API_URL + '/api/endereco';

  constructor(private http: ControlHttp) {
  }

  consultarEnderecoPorCep(cep: string): Observable<any> {
    if (cep.length < 8) {
      return of(null);
    }
    return this.http.get(`${this.resourceUrl}/${cep}`).pipe(
        catchError(err => {
          return throwError(err);
        })
    );
  } 
}
