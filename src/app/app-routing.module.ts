import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { DepartamentoCreateComponent } from './components/departamento/departamento-create/departamento-create.component';
import { DepartamentoDeleteComponent } from './components/departamento/departamento-delete/departamento-delete.component';
import { DepartamentoListComponent } from './components/departamento/departamento-list/departamento-list.component';
import { DepartamentoUpdateComponent } from './components/departamento/departamento-update/departamento-update.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { SistemaCreateComponent } from './components/sistema/sistema-create/sistema-create.component';
import { SistemaDeleteComponent } from './components/sistema/sistema-delete/sistema-delete.component';
import { SistemaListComponent } from './components/sistema/sistema-list/sistema-list.component';
import { SistemaUpdateComponent } from './components/sistema/sistema-update/sistema-update.component';

const routes: Routes = [
  { 
    path: 'login', component: LoginComponent},
  { 
    path: '',
    component: NavComponent, canActivate: [AuthGuard], children : [
      {path : 'home', component : HomeComponent},
      {path : 'sistemas', component : SistemaListComponent},
      {path : 'sistemas/novo', component : SistemaCreateComponent},
      {path : 'sistemas/update/:id', component : SistemaUpdateComponent},
      {path : 'sistemas/delete/:id', component : SistemaDeleteComponent},

      {path : 'departamento', component : DepartamentoListComponent},
      {path : 'departamento/novo', component : DepartamentoCreateComponent},
      {path : 'departamento/update/:id', component : DepartamentoUpdateComponent},
      {path : 'departamento/delete/:id', component : DepartamentoDeleteComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
