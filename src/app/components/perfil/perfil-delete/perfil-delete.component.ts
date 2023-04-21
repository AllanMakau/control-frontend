import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Perfil } from 'src/app/models/perfil';
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
  selector: 'app-perfil-delete',
  templateUrl: './perfil-delete.component.html',
  styleUrls: ['./perfil-delete.component.css']
})
export class PerfilDeleteComponent implements OnInit{
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

  constructor(
    private service:PerfilService, 
    private toast:ToastrService, 
    private router:Router,
    private route:ActivatedRoute
    ){}

  ngOnInit(): void {
    this.perfil.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }


  findById():void{
    this.service.findById(this.perfil.id).subscribe(response => {
      this.perfil = response;
    });
  }
  delete(){
    this.service.delete(this.perfil.id).subscribe( () => {
      this.toast.success("Perfil deletado com sucesso", "Delete.")
      this.router.navigate(['perfis'])
    }, ex =>{this.toast.error(ex.error.detail)})
  }


}

