import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Sistema } from 'src/app/models/sistema';
import { SistemaService } from 'src/app/services/sistema.service';

@Component({
  selector: 'app-sistema-delete',
  templateUrl: './sistema-delete.component.html',
  styleUrls: ['./sistema-delete.component.css']
})
export class SistemaDeleteComponent implements OnInit{
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;

  sistema:  Sistema = {
    id:"",
    nome:"",
    descricao:"",
    abreviacao:"",
    ativo:true
  }

  constructor(
    private service:SistemaService, 
    private toast:ToastrService, 
    private router:Router,
    private route:ActivatedRoute
    ){}

  ngOnInit(): void {
    this.sistema.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }


  findById():void{
    this.service.findById(this.sistema.id).subscribe(response => {
      this.sistema = response;
    });
  }
  delete(){
    this.service.delete(this.sistema.id).subscribe( () => {
      this.toast.success("Sistema deletado com sucesso", "Delete.")
      this.router.navigate(['sistemas'])
    }, ex =>{this.toast.error(ex.error.detail)})
  }


}
