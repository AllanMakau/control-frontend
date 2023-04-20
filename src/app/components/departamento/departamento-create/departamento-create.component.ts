import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Departamento } from 'src/app/models/departamento';
import { DepartamentoService } from 'src/app/services/departamento.service';


@Component({
  selector: 'app-departamento-create',
  templateUrl: './departamento-create.component.html',
  styleUrls: ['./departamento-create.component.css']
})
export class DepartamentoCreateComponent {

  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;

  departamento:  Departamento = {
    id:"",
    nome:"",
    descricao:"",
    ativo:true
  }

  nome: FormControl = new FormControl(null,Validators.minLength(4));
  abreviacao: FormControl = new FormControl(null,Validators.minLength(4));
  descricao: FormControl = new FormControl(null,Validators.minLength(4));

  constructor(private service:DepartamentoService, private toast:ToastrService, private router:Router){}

  create(){
    this.service.create(this.departamento).subscribe( () => {
      this.toast.success("Departamento cadastrado com sucesso", "Sucesso.")
      this.router.navigate(['departamentos'])
    }, ex =>{this.toast.error})
  }

  validaCampos():boolean{
    return this.nome.valid 
    && this.abreviacao.valid 
    && this.descricao.valid;
  }
}
