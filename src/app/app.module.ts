import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Para trabalhar com formulários no Angular 12
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Para realizar requisições HTTP
import { HttpClientModule } from '@angular/common/http';

// Imports para componentes do Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { NavComponent } from './components/nav/nav.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'
import {MatGridListModule} from '@angular/material/grid-list';

import { ToastrModule } from 'ngx-toastr';

import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SistemaListComponent } from './components/sistema/sistema-list/sistema-list.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptorProvider } from './interceptors/auth.interceptor';
import { SistemaCreateComponent } from './components/sistema/sistema-create/sistema-create.component';
import { SistemaUpdateComponent } from './components/sistema/sistema-update/sistema-update.component';
import { SistemaDeleteComponent } from './components/sistema/sistema-delete/sistema-delete.component';
import { DepartamentoListComponent } from './components/departamento/departamento-list/departamento-list.component';
import { DepartamentoCreateComponent } from './components/departamento/departamento-create/departamento-create.component';
import { DepartamentoUpdateComponent } from './components/departamento/departamento-update/departamento-update.component';
import { DepartamentoDeleteComponent } from './components/departamento/departamento-delete/departamento-delete.component';
import { CargoListComponent } from './components/cargo/cargo-list/cargo-list.component';
import { CargoCreateComponent } from './components/cargo/cargo-create/cargo-create.component';
import { CargoUpdateComponent } from './components/cargo/cargo-update/cargo-update.component';
import { CargoDeleteComponent } from './components/cargo/cargo-delete/cargo-delete.component';
import { TagListComponent } from './components/tag/tag-list/tag-list.component';
import { TagCreateComponent } from './components/tag/tag-create/tag-create.component';
import { TagUpdateComponent } from './components/tag/tag-update/tag-update.component';
import { TagDeleteComponent } from './components/tag/tag-delete/tag-delete.component';
import { PerfilListComponent } from './components/perfil/perfil-list/perfil-list.component';
import { PerfilCreateComponent } from './components/perfil/perfil-create/perfil-create.component';
import { PerfilUpdateComponent } from './components/perfil/perfil-update/perfil-update.component';
import { PerfilDeleteComponent } from './components/perfil/perfil-delete/perfil-delete.component';
import { AddTagComponent } from './components/perfil/add-tag/add-tag.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    HeaderComponent,
    SistemaListComponent,
    LoginComponent,
    SistemaCreateComponent,
    SistemaUpdateComponent,
    SistemaDeleteComponent,
    DepartamentoListComponent,
    DepartamentoCreateComponent,
    DepartamentoUpdateComponent,
    DepartamentoDeleteComponent,
    CargoListComponent,
    CargoCreateComponent,
    CargoUpdateComponent,
    CargoDeleteComponent,
    TagListComponent,
    TagCreateComponent,
    TagUpdateComponent,
    TagDeleteComponent,
    PerfilListComponent,
    PerfilCreateComponent,
    PerfilUpdateComponent,
    PerfilDeleteComponent,
    AddTagComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Forms
    FormsModule,
    ReactiveFormsModule,
    // Requisições http
    HttpClientModule,
    // Angular Material
    MatFormFieldModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatSlideToggleModule,
    MatGridListModule,
    ToastrModule.forRoot({
      timeOut:2000,
      closeButton:true,
      progressBar:true
    }),
    

  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
