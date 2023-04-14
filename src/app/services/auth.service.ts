import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api.config';
import { Credenciais } from '../models/credenciais';
import { JwtHelperService } from '@auth0/angular-jwt';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  jwtHelper: JwtHelperService = new JwtHelperService();

  autenticate(credenciais:Credenciais){
    return this.http.post(`${API_CONFIG.baseUrl}/login`,credenciais ,{
      observe:'response',
      responseType: 'text'
    })
  }

  sucessfulLogin(authToken:string){
    console.log('gravando token')
    localStorage.setItem('token',authToken);
  }

  isAuthenticate(){
    let token =localStorage.getItem('token');

    if(token != null){
      console.log('token nao esta nulo')
      if(this.jwtHelper.isTokenExpired(token)){
        console.log('token expirado')
        return false
      } else {
        console.log('token nao expirado')
        return true;
      }

    }

    return false;

  }

  logout(){
    localStorage.clear();
  }
}
