import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Credenciais } from 'src/app/models/credenciais';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

constructor(private toast: ToastrService){}

creds: Credenciais = {
  email:'',
  senha:'',
}

email = new FormControl(null,Validators.email)
senha = new FormControl(null,Validators.minLength(3))

  ngOnInit(): void {
  } 

  validaCampos():boolean{
    if(this.email.valid && this.email.valid){
      return true;
    }
      return false;;
  }

  logar(){
    this.toast.error("usuario ou senha inválidos", 'Login');
  }

}
