import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Departamento } from 'src/app/models/departamento';
import { DepartamentoService } from 'src/app/services/departamento.service';

@Component({
  selector: 'app-departamento-delete',
  templateUrl: './departamento-delete.component.html',
  styleUrls: ['./departamento-delete.component.css']
})
export class DepartamentoDeleteComponent implements OnInit{
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;

  departamento:  Departamento = {
    id:"",
    nome:"",
    descricao:"",
    ativo:true
  }

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
  delete(){
    this.service.delete(this.departamento.id).subscribe( () => {
      this.toast.success("Departamento deletado com sucesso", "Delete.")
      this.router.navigate(['departamento'])
    }, ex =>{this.toast.error(ex.error.detail)})
  }


}
