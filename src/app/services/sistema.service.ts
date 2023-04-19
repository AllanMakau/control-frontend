import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api.config';
import { Sistema } from '../models/sistema';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SistemaService {

  constructor(private http:HttpClient) { }


  findById(id:any):Observable<Sistema>{
    return  this.http.get<Sistema>(`${API_CONFIG.baseUrl}/system/${id}`)
  }
  findAll(): Observable<Sistema[]> {
    return this.http.get<Sistema[]>(`${API_CONFIG.baseUrl}/system`);
  }

  create(sistema: Sistema):Observable<Sistema>  {
    return this.http.post<Sistema>(`${API_CONFIG.baseUrl}/system`,sistema);
  }

  update(sistema: Sistema):Observable<Sistema>  {
    return this.http.put<Sistema>(`${API_CONFIG.baseUrl}/system/${sistema.id}`,sistema);
  }

  delete(id:any):Observable<Sistema>{
    return  this.http.delete<Sistema>(`${API_CONFIG.baseUrl}/system/${id}`)
  }
}
