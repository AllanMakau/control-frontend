import { Component, OnInit, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { MatDrawer } from '@angular/material/sidenav';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  

  sideBarOpen =true;
  constructor(private router: Router, private authService: AuthService, private toast: ToastrService, public spinner:SpinnerService){ }

  ngOnInit(): void {

  }

  sideBarToggler(){
    console.log('executei apartir do nav')
    this.sideBarOpen =!this.sideBarOpen;
  }

  logout(){
    this.router.navigate([ 'login' ])
    this.authService.logout();
    this.toast.info("Logout realizado com sucesso!", "Logout",{timeOut:3000})
  }

}
