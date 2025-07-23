import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }

  private refreshTrigger = signal(0); // cada cambio actualiza el valor

  get refresh$() {
    return this.refreshTrigger.asReadonly();
  }

  triggerRefresh() {
    this.refreshTrigger.set(this.refreshTrigger() + 1);
  }

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

  getProjects(id:number, criterio: string){
    return this.http.get("http://localhost:3000/project/traerlos/"+id,{
        params :{criterio: criterio}
      }
    )

  }

  saveImages(targetId: number, targetType:string, avatar:any){
    const formData = new FormData();

    formData.append('targetId', targetId.toString());
    formData.append('targetType', targetType);
    formData.append('avatar', avatar); // nombre del campo para la imagen

    return this.http.post("http://localhost:3000/foto/create", formData)
  }

  terminarProject(id:number, estado:boolean){
    return this.http.put("http://localhost:3000/project/project-stop/"+id,
      {estado: estado}
    )
  }

    deleteProject(id:number){
    return this.http.delete("http://localhost:3000/project/project-delete/"+id)
  }

  getImages(id:number){
    return this.http.get("http://localhost:3000/foto/traer/"+id)
  }

  getCounterProject(){
    return this.http.get("http://localhost:3000/project/counter-project")
  }

  updateProject(titulo:string, descripcion: string, id:number){
    return this.http.put("http://localhost:3000/project/project-update/"+id,{
      titulo:titulo,
      descripcion:descripcion
    })

  }

  ingresosProject(id:number, gasto: number, ganancia:number){
    return this.http.put("http://localhost:3000/project/registro-ingresos/"+id,{
      gasto:gasto,
      ganancia: ganancia
    })
  }
}

