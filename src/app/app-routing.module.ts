import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { CargoCreateComponent } from './components/cargo/cargo-create/cargo-create.component';
import { CargoDeleteComponent } from './components/cargo/cargo-delete/cargo-delete.component';
import { CargoListComponent } from './components/cargo/cargo-list/cargo-list.component';
import { CargoUpdateComponent } from './components/cargo/cargo-update/cargo-update.component';
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
import { TagCreateComponent } from './components/tag/tag-create/tag-create.component';
import { TagDeleteComponent } from './components/tag/tag-delete/tag-delete.component';
import { TagListComponent } from './components/tag/tag-list/tag-list.component';
import { TagUpdateComponent } from './components/tag/tag-update/tag-update.component';

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

      {path : 'departamentos', component : DepartamentoListComponent},
      {path : 'departamentos/novo', component : DepartamentoCreateComponent},
      {path : 'departamentos/update/:id', component : DepartamentoUpdateComponent},
      {path : 'departamentos/delete/:id', component : DepartamentoDeleteComponent},

      {path : 'cargos', component : CargoListComponent},
      {path : 'cargos/novo', component : CargoCreateComponent},
      {path : 'cargos/update/:id', component : CargoUpdateComponent},
      {path : 'cargos/delete/:id', component : CargoDeleteComponent},

      {path : 'tags', component : TagListComponent},
      {path : 'tags/novo', component : TagCreateComponent},
      {path : 'tags/update/:id', component : TagUpdateComponent},
      {path : 'tags/delete/:id', component : TagDeleteComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
