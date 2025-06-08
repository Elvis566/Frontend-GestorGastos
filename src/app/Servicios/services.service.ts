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
  createProject(titulo:any, descripcion:any, userId: any){
    return this.http.post("http://localhost:3000/project/save",{
      titulo:titulo,
      descripcion: descripcion,
      userId: userId
    })
  }


  getProject(id:number){
    return this.http.get("http://localhost:3000/project/obtener/"+id)
  }

  getProjects(id:number){
    return this.http.get("http://localhost:3000/project/traerlos/"+id)

  }

  saveImages(targetId: number, targetType:string, avatar:any){
    return this.http.post("http://localhost:3000/foto/create",{
      targetId: targetId,
      targetType: targetType,
      avatar: avatar
    })
  }
}
