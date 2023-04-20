import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cargo } from 'src/app/models/cargo';
import { CargoService } from 'src/app/services/cargo.service';

@Component({
  selector: 'app-cargo-delete',
  templateUrl: './cargo-delete.component.html',
  styleUrls: ['./cargo-delete.component.css']
})
export class CargoDeleteComponent implements OnInit{
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;

  cargo:  Cargo = {
    id:"",
    nome:"",
    descricao:"",
    ativo:true
  }

  constructor(
    private service:CargoService, 
    private toast:ToastrService, 
    private router:Router,
    private route:ActivatedRoute
    ){}

  ngOnInit(): void {
    this.cargo.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }


  findById():void{
    this.service.findById(this.cargo.id).subscribe(response => {
      this.cargo = response;
    });
  }
  delete(){
    this.service.delete(this.cargo.id).subscribe( () => {
      this.toast.success("Cargo deletado com sucesso", "Delete.")
      this.router.navigate(['cargo'])
    }, ex =>{this.toast.error(ex.error.detail)})
  }


}
