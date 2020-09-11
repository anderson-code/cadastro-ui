import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/security/guard/auth.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  tokensRenokeUrl: string;

  constructor( private http: HttpClient, 
    private auth: AuthService,
    private router: Router
  ) {
    this.tokensRenokeUrl = `${environment.API_URL}/tokens/revoke`; 
  }

  ngOnInit(): void {
  }

  async logout() {
    return this.http.delete(this.tokensRenokeUrl, { withCredentials: true })
      .toPromise()
      .then(() => {
        this.auth.limparAccessToken();
        this.router.navigate(['/login']);
      });
  }

}
