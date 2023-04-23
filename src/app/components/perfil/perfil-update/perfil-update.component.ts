import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Perfil } from 'src/app/models/perfil';
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
  selector: 'app-perfil-update',
  templateUrl: './perfil-update.component.html',
  styleUrls: ['./perfil-update.component.css']
})
export class PerfilUpdateComponent implements OnInit {
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;

  perfil:  Perfil = {
    id: "",
    nome: "",
    descricao: "",
    tag_list: [],
    ativo: true
  }

  nome: FormControl = new FormControl(null,Validators.minLength(4));
  descricao: FormControl = new FormControl(null,Validators.minLength(4));

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
  update(){
    this.service.update(this.perfil).subscribe( () => {
      this.toast.success("Perfil Atualizado com sucesso", "Update.")
      this.router.navigate(['perfi  s'])
    }, ex =>{this.toast.error})
  }

  validaCampos():boolean{
    return this.nome.valid 
    && this.descricao.valid;
  }
}

