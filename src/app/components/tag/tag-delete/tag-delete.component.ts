import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Tag } from 'src/app/models/tag';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-tag-delete',
  templateUrl: './tag-delete.component.html',
  styleUrls: ['./tag-delete.component.css']
})
export class TagDeleteComponent implements OnInit{
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;

  tag:  Tag = {
    id:"",
    nome:"",
    descricao:"",
    ativo:true
  }

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
  delete(){
    this.service.delete(this.tag.id).subscribe( () => {
      this.toast.success("Tag deletado com sucesso", "Delete.")
      this.router.navigate(['tag'])
    }, ex =>{this.toast.error(ex.error.detail)})
  }


}
