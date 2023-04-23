import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../config/api.config';
import {Observable} from 'rxjs'
import { Perfil } from '../models/perfil';
import { Tag } from '../models/tag';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(private http:HttpClient) { }


  findById(id:any):Observable<Perfil>{
    return  this.http.get<Perfil>(`${API_CONFIG.baseUrl}/function/${id}`)
  }
  findAll(): Observable<Perfil[]> {
    return this.http.get<Perfil[]>(`${API_CONFIG.baseUrl}/function`);
  }

  create(perfil: Perfil):Observable<Perfil>  {
    return this.http.post<Perfil>(`${API_CONFIG.baseUrl}/function`,perfil);
  }

  update(perfil: Perfil):Observable<Perfil>  {
    return this.http.put<Perfil>(`${API_CONFIG.baseUrl}/function/${perfil.id}`,perfil);
  }

  delete(id:any):Observable<Perfil>{
    return  this.http.delete<Perfil>(`${API_CONFIG.baseUrl}/function/${id}`)
  }

  addTag(perfil: Perfil, tag: Tag):Observable<Perfil>  {
    console.log('adicionando tag')
    console.log(tag)
    return this.http.put<Perfil>(`${API_CONFIG.baseUrl}/function/${perfil.id}/add-tag`,tag);
  }

  removeTag(perfil: Perfil, tag: Tag):Observable<Perfil>  {
    console.log('removendo tag')
    console.log(tag)
    console.log(`${API_CONFIG.baseUrl}/function/${perfil.id}/remove-tag`)
    return this.http.put<Perfil>(`${API_CONFIG.baseUrl}/function/${perfil.id}/remove-tag`,tag);
  }
}
