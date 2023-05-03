import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cargo } from 'src/app/models/cargo';
import { Departamento } from 'src/app/models/departamento';
import { Usuario } from 'src/app/models/usuario';
import { CargoService } from 'src/app/services/cargo.service';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {

  cargos: Cargo[] = [];
  depts: Departamento[] = [];

  user:  Usuario = {
    id:"",
    nome:"",
    sobrenome:"",
    apelido:"",
    email:"",
    cpf:"",
    registro:"",
    usuario:"",
    senha:"",
    data_aniversario:"",
    perfis: [],
    departamento: null,
    cargo: null,
    ativo:true
  }

  nome: FormControl = new FormControl(null,Validators.minLength(6));
  sobrenome: FormControl = new FormControl(null,Validators.minLength(4));
  apelido: FormControl = new FormControl(null,Validators.minLength(2));
  email: FormControl = new FormControl(null,Validators.email);
  cpf: FormControl = new FormControl(null,Validators.min(11));
  registro: FormControl = new FormControl(null,Validators.minLength(6));
  usuario: FormControl = new FormControl(null,Validators.minLength(5));
  senha: FormControl = new FormControl(null,Validators.minLength(6));


  constructor(private usuarioService:UsuarioService, 
              private cargoService:CargoService, 
              private deptService:DepartamentoService, 
              private toast:ToastrService, 
              private router:Router){}


  ngOnInit(): void {
    this.getCargo();
    this.getDepartamento();
  }

  getCargo(){
    this.cargoService.findAll().subscribe(response => {
      this.cargos = response;
    });
  }

  getDepartamento(){
    this.deptService.findAll().subscribe(response => {
      this.depts = response;
    })
  }

  create(){
    this.usuarioService.create(this.user).subscribe( () => {
      this.toast.success("Usuario cadastrado com sucesso", "Sucesso.")
      this.router.navigate(['usuarios'])
    }, ex =>{this.toast.error})
  }

  validaCampos():boolean{
    return this.nome.valid 
    && this.sobrenome.valid
    && this.apelido.valid
    && this.cpf.valid
    && this.email.valid
    && this.registro.valid
    && this.usuario.valid
    && this.senha.valid;
  }             
  

}
