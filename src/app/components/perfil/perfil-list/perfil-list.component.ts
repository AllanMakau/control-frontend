import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Perfil } from 'src/app/models/perfil';
import { MatPaginator } from '@angular/material/paginator';
import { PerfilService } from 'src/app/services/perfil.service';


@Component({
  selector: 'app-perfil-list',
  templateUrl: './perfil-list.component.html',
  styleUrls: ['./perfil-list.component.css']
})
export class PerfilListComponent implements OnInit {

  ELEMENT_DATA: Perfil[] = []

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'status','acoes'];
  dataSource = new MatTableDataSource<Perfil>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private service:PerfilService){}

  
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
        console.log(this.ELEMENT_DATA)
        this.dataSource = new MatTableDataSource<Perfil>(resposta);
        this.dataSource.paginator = this.paginator;
    })
  }
}
