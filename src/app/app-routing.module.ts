import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { SistemaListComponent } from './components/sistema/sistema-list/sistema-list.component';

const routes: Routes = [
  { 
    path: 'login', component: LoginComponent
  },
  { 
    path: '',
    component: NavComponent, children : [
      {path : 'home', component : HomeComponent},
      {path : 'sistemas', component : SistemaListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
