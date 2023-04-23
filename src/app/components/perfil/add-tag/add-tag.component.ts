import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Perfil } from 'src/app/models/perfil';
import { Tag } from 'src/app/models/tag';
import { PerfilService } from 'src/app/services/perfil.service';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-add-tag',
  templateUrl: './add-tag.component.html',
  styleUrls: ['./add-tag.component.css']
})
export class AddTagComponent implements OnInit {

  ELEMENT_DATA1: any[] = []
  ELEMENT_DATA2: any[] = []

  perfil:  Perfil = {
    id: "",
    nome: "",
    descricao: "",
    tag_list: [],
    ativo: true
  }

  filterTag: Tag[] = [];

  displayedColumns: string[] = ['id', 'nome', 'acoes'];
  dataSource1 = new MatTableDataSource<Tag>(this.ELEMENT_DATA1);
  dataSource2 = new MatTableDataSource<Tag>(this.ELEMENT_DATA2);
  

  @ViewChild('MatPaginator1') paginator1: MatPaginator;
  @ViewChild('MatPaginator2') paginator2: MatPaginator;

  constructor(
    private service:PerfilService, 
    private tagservice: TagService,
    private route:ActivatedRoute,
    private toast:ToastrService
    ){}


  ngOnInit(): void {
    this.perfil.id = this.route.snapshot.paramMap.get('id');
    this.findById();
    this.updateTables();
  }

  updateTables(): void{
    this.filterTags();
    this.findById();
  }


  findById():void{
    this.service.findById(this.perfil.id).subscribe(response => {
      this.perfil = response;
      this.dataSource1 = new MatTableDataSource<Tag>(this.perfil.tag_list);
      this.dataSource1.paginator = this.paginator1;
    });
  }

  filterTags():void{
    this.tagservice.findAll().subscribe(resposta =>{
      this.filterTag = resposta.filter(tag => {
        const found  = this.perfil.tag_list.some(ob => tag.id === ob.id);
        return !found;
      })
      this.dataSource2 = new MatTableDataSource<Tag>(this.filterTag)
      this.dataSource2.paginator = this.paginator2;
    },)
  }

  addTag(tag: Tag):void{
    this.updateTables();
    this.service.addTag(this.perfil,tag).subscribe( resposta =>{
      this.toast.success("Tag adicionada com sucesso", "Sucesso.")
    }, ex =>{this.toast.error});
    this.updateTables();
  }

  removerTag(tag: Tag):void{
    this.updateTables();
    this.service.removeTag(this.perfil,tag).subscribe( resposta =>{
      this.toast.success("Tag removida cadastrado com sucesso", "Sucesso.")
    }, ex =>{this.toast.error});
    this.updateTables();
  }

}


