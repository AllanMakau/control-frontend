import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Tag } from 'src/app/models/tag';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.css']
})
export class TagListComponent implements OnInit {

  ELEMENT_DATA: Tag[] = []

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'status','acoes'];
  dataSource = new MatTableDataSource<Tag>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private service:TagService){}

  
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
        this.dataSource = new MatTableDataSource<Tag>(resposta);
        this.dataSource.paginator = this.paginator;
    })
  }
}
