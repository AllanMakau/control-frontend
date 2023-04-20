import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Cargo } from 'src/app/models/cargo';
import { CargoService } from 'src/app/services/cargo.service';

@Component({
  selector: 'app-cargo-list',
  templateUrl: './cargo-list.component.html',
  styleUrls: ['./cargo-list.component.css']
})
export class CargoListComponent implements OnInit {

  ELEMENT_DATA: Cargo[] = []

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'status','acoes'];
  dataSource = new MatTableDataSource<Cargo>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private service:CargoService){}

  
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
        this.dataSource = new MatTableDataSource<Cargo>(resposta);
        this.dataSource.paginator = this.paginator;
    })
  }
}
