import { Injectable } from '@angular/core';
import { AuthService } from './guard/auth.service';
import { Router } from '@angular/router';
import { ControlHttp } from './control-http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  tokensRenokeUrl: string;

  constructor(
    private http: ControlHttp, 
    private auth: AuthService,
    private router: Router
  ) {
    this.tokensRenokeUrl = `${environment.API_URL}/tokens/revoke`;
  }

  logout() {
    return this.http.delete(this.tokensRenokeUrl, { withCredentials: true })
      .toPromise()
      .then(() => {
        this.auth.limparAccessToken();
        this.router.navigate(['/login']);
      });
  }
}
