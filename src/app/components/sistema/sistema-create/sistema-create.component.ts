import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Sistema } from 'src/app/models/sistema';
import { SistemaService } from 'src/app/services/sistema.service';

@Component({
  selector: 'app-sistema-create',
  templateUrl: './sistema-create.component.html',
  styleUrls: ['./sistema-create.component.css']
})
export class SistemaCreateComponent {

  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;

  sistema:  Sistema = {
    id:"",
    nome:"",
    descricao:"",
    abreviacao:"",
    ativo:true
  }

  nome: FormControl = new FormControl(null,Validators.minLength(4));
  abreviacao: FormControl = new FormControl(null,Validators.minLength(4));
  descricao: FormControl = new FormControl(null,Validators.minLength(4));

  constructor(private service:SistemaService, private toast:ToastrService, private router:Router){}

  create(){
    this.service.create(this.sistema).subscribe( () => {
      this.toast.success("Sistema cadastrado com sucesso", "Sucesso.")
      this.router.navigate(['sistemas'])
    }, ex =>{this.toast.error})
  }

  validaCampos():boolean{
    return this.nome.valid 
    && this.abreviacao.valid 
    && this.descricao.valid;
  }
}
