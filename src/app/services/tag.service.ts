import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Tag } from '../models/tag';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private http:HttpClient) { }


  findById(id:any):Observable<Tag>{
    return  this.http.get<Tag>(`${API_CONFIG.baseUrl}/tagpermission/${id}`)
  }
  findAll(): Observable<Tag[]> {
    return this.http.get<Tag[]>(`${API_CONFIG.baseUrl}/tagpermission`);
  }

  create(tag: Tag):Observable<Tag>  {
    return this.http.post<Tag>(`${API_CONFIG.baseUrl}/tagpermission`,tag);
  }

  update(tag: Tag):Observable<Tag>  {
    return this.http.put<Tag>(`${API_CONFIG.baseUrl}/tagpermission/${tag.id}`,tag);
  }

  delete(id:any):Observable<Tag>{
    return  this.http.delete<Tag>(`${API_CONFIG.baseUrl}/tagpermission/${id}`)
  }
}

