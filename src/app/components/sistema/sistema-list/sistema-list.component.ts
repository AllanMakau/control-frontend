import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Sistema } from 'src/app/models/sistema';
import { SistemaService } from 'src/app/services/sistema.service';

@Component({
  selector: 'app-sistema-list',
  templateUrl: './sistema-list.component.html',
  styleUrls: ['./sistema-list.component.css']
})
export class SistemaListComponent implements OnInit {

  ELEMENT_DATA: Sistema[] = []

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'abreviacao','status','acoes'];
  dataSource = new MatTableDataSource<Sistema>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private service:SistemaService){}

  
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
        this.dataSource = new MatTableDataSource<Sistema>(resposta);
        this.dataSource.paginator = this.paginator;
    })
  }
}

