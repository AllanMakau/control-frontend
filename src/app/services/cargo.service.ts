import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Cargo } from '../models/cargo';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  constructor(private http:HttpClient) { }


  findById(id:any):Observable<Cargo>{
    return  this.http.get<Cargo>(`${API_CONFIG.baseUrl}/officer/${id}`)
  }
  findAll(): Observable<Cargo[]> {
    return this.http.get<Cargo[]>(`${API_CONFIG.baseUrl}/officer`);
  }

  create(cargo: Cargo):Observable<Cargo>  {
    return this.http.post<Cargo>(`${API_CONFIG.baseUrl}/officer`,cargo);
  }

  update(cargo: Cargo):Observable<Cargo>  {
    return this.http.put<Cargo>(`${API_CONFIG.baseUrl}/officer/${cargo.id}`,cargo);
  }

  delete(id:any):Observable<Cargo>{
    return  this.http.delete<Cargo>(`${API_CONFIG.baseUrl}/officer/${id}`)
  }
}

