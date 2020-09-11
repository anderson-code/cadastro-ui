import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/security/guard/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  emailTesting = 'swapi@swapi.com';
  passwordTestig = 'swapitesting';
  submittingForm = false;

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private auth: AuthService,
 /*   private errorHandler: ErrorHandlerService,
    private alertaService: AlertaService */
  ) { 
      this.baseLoginForm(); 
  }

  ngOnInit() {}

  baseLoginForm() {
    this.loginForm = this.fb.group({
      'email': ['', [Validators.required]],
      'password': ['', [Validators.required]]
    });
  }

  login() {
    this.submittingForm = true;

    this.auth.login(this.loginForm.value.email, this.loginForm.value.password)
    .then(() => {
        this.router.navigate(['/dashboard']);
    })
    .catch(erro => {
     // this.errorHandler.handle(erro);
    });

 //   this.router.navigate(['/dashboard'])
 //   .then(() => {
  //      window.location.reload();
 //   });

//   this.router.navigateByUrl('/clients');
//      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
//         this.router.navigate(['clients']);
//    }); 
  }

  // para buscar os nomes de campos com maior facilidade
  get f() {return this.loginForm.controls; }

}
