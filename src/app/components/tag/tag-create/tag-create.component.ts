import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Tag } from 'src/app/models/tag';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-tag-create',
  templateUrl: './tag-create.component.html',
  styleUrls: ['./tag-create.component.css']
})
export class TagCreateComponent {

  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;

  tag:  Tag = {
    id:"",
    nome:"",
    descricao:"",
    ativo:true
  }

  nome: FormControl = new FormControl(null,Validators.minLength(4));
  descricao: FormControl = new FormControl(null,Validators.minLength(4));

  constructor(private service:TagService, private toast:ToastrService, private router:Router){}

  create(){
    this.service.create(this.tag).subscribe( () => {
      this.toast.success("Tag cadastrado com sucesso", "Sucesso.")
      this.router.navigate(['tags'])
    }, ex =>{this.toast.error})
  }

  validaCampos():boolean{
    return this.nome.valid 
    && this.descricao.valid;
  }
}
