import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Departamento } from 'src/app/models/departamento';
import { DepartamentoService } from 'src/app/services/departamento.service';

@Component({
  selector: 'app-departamento-update',
  templateUrl: './departamento-update.component.html',
  styleUrls: ['./departamento-update.component.css']
})
export class DepartamentoUpdateComponent implements OnInit{
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
  descricao: FormControl = new FormControl(null,Validators.minLength(4));

  constructor(
    private service:DepartamentoService, 
    private toast:ToastrService, 
    private router:Router,
    private route:ActivatedRoute
    ){}

  ngOnInit(): void {
    this.departamento.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }


  findById():void{
    this.service.findById(this.departamento.id).subscribe(response => {
      this.departamento = response;
    });
  }
  update(){
    this.service.update(this.departamento).subscribe( () => {
      this.toast.success("Departamento Atualizado com sucesso", "Update.")
      this.router.navigate(['departamento'])
    }, ex =>{this.toast.error})
  }

  validaCampos():boolean{
    return this.nome.valid 
    && this.descricao.valid;
  }
}
