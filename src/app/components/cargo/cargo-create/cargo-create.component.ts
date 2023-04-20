import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cargo } from 'src/app/models/cargo';
import { CargoService } from 'src/app/services/cargo.service';

@Component({
  selector: 'app-cargo-create',
  templateUrl: './cargo-create.component.html',
  styleUrls: ['./cargo-create.component.css']
})
export class CargoCreateComponent {

  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;

  cargo:  Cargo = {
    id:"",
    nome:"",
    descricao:"",
    ativo:true
  }

  nome: FormControl = new FormControl(null,Validators.minLength(4));
  abreviacao: FormControl = new FormControl(null,Validators.minLength(4));
  descricao: FormControl = new FormControl(null,Validators.minLength(4));

  constructor(private service:CargoService, private toast:ToastrService, private router:Router){}

  create(){
    this.service.create(this.cargo).subscribe( () => {
      this.toast.success("Cargo cadastrado com sucesso", "Sucesso.")
      this.router.navigate(['cargo'])
    }, ex =>{this.toast.error})
  }

  validaCampos():boolean{
    return this.nome.valid 
    && this.abreviacao.valid 
    && this.descricao.valid;
  }
}
