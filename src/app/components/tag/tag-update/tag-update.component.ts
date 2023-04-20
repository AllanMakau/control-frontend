import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Tag } from 'src/app/models/tag';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-tag-update',
  templateUrl: './tag-update.component.html',
  styleUrls: ['./tag-update.component.css']
})
export class TagUpdateComponent implements OnInit{
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

  constructor(
    private service:TagService, 
    private toast:ToastrService, 
    private router:Router,
    private route:ActivatedRoute
    ){}

  ngOnInit(): void {
    this.tag.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }


  findById():void{
    this.service.findById(this.tag.id).subscribe(response => {
      this.tag = response;
    });
  }
  update(){
    this.service.update(this.tag).subscribe( () => {
      this.toast.success("Tag Atualizado com sucesso", "Update.")
      this.router.navigate(['tags'])
    }, ex =>{this.toast.error})
  }

  validaCampos():boolean{
    return this.nome.valid 
    && this.descricao.valid;
  }
}
