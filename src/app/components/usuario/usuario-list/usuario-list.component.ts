import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent {

  
  ELEMENT_DATA: Usuario[] = []

  displayedColumns: string[] = ['id', 'nome', 'usuario', 'email', 'data','ativo', 'cargo','departamento','acoes'];
  dataSource = new MatTableDataSource<Usuario>(this.ELEMENT_DATA);

  dateFormat = 'dd/MM/yyyy';

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private service:UsuarioService){}

  
  ngOnInit(): void {
    this.findAll()
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  findAll(){
    this.service.findAll().subscribe(
    
      resposta => { 
          this.ELEMENT_DATA = resposta 
          this.dataSource = new MatTableDataSource<Usuario>(resposta);
          this.dataSource.paginator = this.paginator;
    })
  }

}
