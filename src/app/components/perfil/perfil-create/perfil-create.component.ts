import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Perfil } from 'src/app/models/perfil';
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
  selector: 'app-perfil-create',
  templateUrl: './perfil-create.component.html',
  styleUrls: ['./perfil-create.component.css']
})
export class PerfilCreateComponent {

  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;

  perfil:  Perfil = {
    id:"",
    nome:"",
    descricao:"",
    tag_list: [],
    ativo:true
  }

  nome: FormControl = new FormControl(null,Validators.minLength(4));
  descricao: FormControl = new FormControl(null,Validators.minLength(4));

  constructor(private service:PerfilService, private toast:ToastrService, private router:Router){}

  create(){
    this.service.create(this.perfil).subscribe( () => {
      this.toast.success("Perfil cadastrado com sucesso", "Sucesso.")
      this.router.navigate(['perfis'])
    }, ex =>{this.toast.error})
  }

  validaCampos():boolean{
    return this.nome.valid 
    && this.descricao.valid;
  }
}
