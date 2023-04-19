import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Departamento } from '../models/departamento';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  constructor(private http:HttpClient) { }

  findById(id:any):Observable<Departamento>{
    return  this.http.get<Departamento>(`${API_CONFIG.baseUrl}/system/${id}`)
  }
  findAll(): Observable<Departamento[]> {
    return this.http.get<Departamento[]>(`${API_CONFIG.baseUrl}/system`);
  }

  create(departamento: Departamento):Observable<Departamento>  {
    return this.http.post<Departamento>(`${API_CONFIG.baseUrl}/system`,departamento);
  }

  update(departamento: Departamento):Observable<Departamento>  {
    return this.http.put<Departamento>(`${API_CONFIG.baseUrl}/system/${departamento.id}`,departamento);
  }

  delete(id:any):Observable<Departamento>{
    return  this.http.delete<Departamento>(`${API_CONFIG.baseUrl}/system/${id}`)
  }
}
