import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Sistema } from 'src/app/models/sistema';
import { SistemaService } from 'src/app/services/sistema.service';

@Component({
  selector: 'app-sistema-update',
  templateUrl: './sistema-update.component.html',
  styleUrls: ['./sistema-update.component.css']
})
export class SistemaUpdateComponent implements OnInit{
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

  nome: FormControl = new FormControl(null,Validators.minLength(4));
  abreviacao: FormControl = new FormControl(null,Validators.minLength(4));
  descricao: FormControl = new FormControl(null,Validators.minLength(4));

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
  update(){
    this.service.update(this.sistema).subscribe( () => {
      this.toast.success("Sistema Atualizado com sucesso", "Update.")
      this.router.navigate(['sistemas'])
    }, ex =>{this.toast.error})
  }

  validaCampos():boolean{
    return this.nome.valid 
    && this.abreviacao.valid 
    && this.descricao.valid;
  }
}
