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
import { AddTagComponent } from './components/perfil/add-tag/add-tag.component';
import { PerfilCreateComponent } from './components/perfil/perfil-create/perfil-create.component';
import { PerfilDeleteComponent } from './components/perfil/perfil-delete/perfil-delete.component';
import { PerfilListComponent } from './components/perfil/perfil-list/perfil-list.component';
import { PerfilUpdateComponent } from './components/perfil/perfil-update/perfil-update.component';
import { SistemaCreateComponent } from './components/sistema/sistema-create/sistema-create.component';
import { SistemaDeleteComponent } from './components/sistema/sistema-delete/sistema-delete.component';
import { SistemaListComponent } from './components/sistema/sistema-list/sistema-list.component';
import { SistemaUpdateComponent } from './components/sistema/sistema-update/sistema-update.component';
import { TagCreateComponent } from './components/tag/tag-create/tag-create.component';
import { TagDeleteComponent } from './components/tag/tag-delete/tag-delete.component';
import { TagListComponent } from './components/tag/tag-list/tag-list.component';
import { TagUpdateComponent } from './components/tag/tag-update/tag-update.component';
import { UsuarioListComponent } from './components/usuario/usuario-list/usuario-list.component';

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
      {path : 'tags/delete/:id', component : TagDeleteComponent},

      {path : 'perfis', component : PerfilListComponent},
      {path : 'perfis/:id/add-tag', component : AddTagComponent},
      {path : 'perfis/novo', component : PerfilCreateComponent},
      {path : 'perfis/update/:id', component : PerfilUpdateComponent},
      {path : 'perfis/delete/:id', component : PerfilDeleteComponent},

      {path : 'users', component : UsuarioListComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
