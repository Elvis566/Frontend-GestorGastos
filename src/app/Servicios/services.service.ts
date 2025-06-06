import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }

  login(gmail:any, clave:any){
    return this.http.post("http://localhost:3000/user/login",{
      gmail:gmail,
      clave: clave
    })
  }

    saveUser(gmail:any, clave:any, apodo: any){
    return this.http.post("http://localhost:3000/user/save",{
      gmail:gmail,
      clave: clave,
      apodo: apodo
    })
  }
}
