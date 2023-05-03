import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any>  = new EventEmitter();

  constructor() {}

  ngOnInit() {

  }

  toggleSideBar(){
    console.log('executei apartir do header')
    this.toggleSideBarForMe.emit();
  }


}
