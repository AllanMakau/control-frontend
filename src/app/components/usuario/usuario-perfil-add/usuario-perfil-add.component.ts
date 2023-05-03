import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Perfil } from 'src/app/models/perfil';
import { Usuario } from 'src/app/models/usuario';
import { PerfilService } from 'src/app/services/perfil.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-perfil-add',
  templateUrl: './usuario-perfil-add.component.html',
  styleUrls: ['./usuario-perfil-add.component.css']
})
export class UsuarioPerfilAddComponent implements OnInit{


  ELEMENT_DATA1: any[] = []
  ELEMENT_DATA2: any[] = []

  filterPerfil: Perfil[] = [];

  displayedColumns: string[] = ['id', 'nome', 'acoes'];

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
    departamento: null,
    perfis: [],
    cargo: null,
    ativo:true
  }

  dataSource1 = new MatTableDataSource<Perfil>(this.ELEMENT_DATA1);
  dataSource2 = new MatTableDataSource<Perfil>(this.ELEMENT_DATA2);
  

  @ViewChild('MatPaginator1') paginator1: MatPaginator;
  @ViewChild('MatPaginator2') paginator2: MatPaginator;

  constructor(
    private service:UsuarioService, 
    private perfilService: PerfilService,
    private route:ActivatedRoute,
    private toast:ToastrService
    ){}


  ngOnInit(): void {
    this.user.id = this.route.snapshot.paramMap.get('id');
    this.findById();
    this.updateTables();

  }

  updateTables(): void{
    this.filterPerfis();
    this.findById();
  }

  findById():void{
    this.service.findById(this.user.id).subscribe(response => {
      this.user = response;
      this.dataSource1 = new MatTableDataSource<Perfil>(this.user.perfis);
      this.dataSource1.paginator = this.paginator1;
    });
  }

  filterPerfis():void{
    this.perfilService.findAll().subscribe(resposta =>{
      this.filterPerfil = resposta.filter(perfil => {
        const found  = this.user.perfis.some(ob => perfil.id === ob.id);
        return !found;
      })
      this.dataSource2 = new MatTableDataSource<Perfil>(this.filterPerfil)
      this.dataSource2.paginator = this.paginator2;
    },)
  }



  addPerfil(perfil: Perfil):void{
    this.updateTables();
    this.service.addPerfil(this.user,perfil).subscribe( resposta =>{
      this.toast.success("perfil adicionado com sucesso", "Sucesso.")
    }, ex =>{this.toast.error});
    this.updateTables();
  }

  removerPerfil(perfil: Perfil):void{
    this.updateTables();
    this.service.removerPerfil(this.user,perfil).subscribe( resposta =>{
      this.toast.success("perfil removido cadastrado com sucesso", "Sucesso.")
    }, ex =>{this.toast.error});
    this.updateTables();

  }

}
