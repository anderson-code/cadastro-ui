import { Injectable } from '@angular/core';
import { ControlHttp } from 'src/app/security/control-http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private resourceUrl = environment.API_URL + '/api/cliente';

  constructor(private http: ControlHttp) { }

  cadastrar(cliente: any) {
    return this.http.post(this.resourceUrl, cliente);
  }
}
