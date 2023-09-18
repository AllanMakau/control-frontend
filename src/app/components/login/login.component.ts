import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Credenciais } from 'src/app/models/credenciais';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ErrorDefault } from 'src/app/models/error';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

constructor(private toast: ToastrService, 
            private auth: AuthService, 
             private router:Router
             , private spinner: SpinnerService){}

creds: Credenciais = {
  username:'',
  password:'',
}

username = new FormControl(null,Validators.email)
password = new FormControl(null,Validators.minLength(3))

errorDefault: ErrorDefault;

  ngOnInit(): void {
  } 

  validaCampos():boolean{
      return this.username.valid && this.password.valid;
  }

  logar(){
    this.spinner.show();
    this.auth.autenticate(this.creds).subscribe(response => {
      this.auth.sucessfulLogin(response.headers.get('Authorization').substring(7));
      this.router.navigate(['home'])
    }, ex => {
      this.toast.error(ex.error)
    })
    this.spinner.hide();
  }

}
