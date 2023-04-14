import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Credenciais } from 'src/app/models/credenciais';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

constructor(private toast: ToastrService, private auth: AuthService, private router:Router){}

creds: Credenciais = {
  username:'',
  password:'',
}

username = new FormControl(null,Validators.email)
password = new FormControl(null,Validators.minLength(3))

  ngOnInit(): void {
  } 

  validaCampos():boolean{
      return this.username.valid && this.password.valid;
  }

  logar(){
    this.auth.autenticate(this.creds).subscribe(response => {
      this.auth.sucessfulLogin(response.headers.get('Authorization').substring(7));
      console.log('pegando token')
      console.log(response.headers.get('Authorization').substring(7))
      console.log('navegando para pagina sistemas')
      this.router.navigate(['sistemas'])
    }, () => {
      this.toast.error('usuário ou senha invalidos')
    })
  }

}
