import { Component, inject } from '@angular/core';
import { Project } from '../../Interfaces/project';
import { ServicesService } from '../../Servicios/services.service';

@Component({
  selector: 'app-form-project',
  imports: [],
  templateUrl: './form-project.component.html',
  styleUrl: './form-project.component.css'
})
export class FormProjectComponent {

  userId:number = parseInt(localStorage.getItem("userId") || "0") 
  contador:number = 0;
  selectedFile:File | null = null;

  public apiS = inject(ServicesService)

  onFileSelected(event: any):void {
    const file = event.target.files[0];
    
    if(file){
      this.selectedFile = file
    }
  }

  saveProject(titulo:string, descripcion:string) {
    this.contador = parseInt(localStorage.getItem("contadorP") || "0") + 1
    this.apiS.createProject(titulo, descripcion, this.userId).subscribe({
      next:(data:any)=>{
        console.log("Mensaje exitoso");
      }, error:(e:any)=>{
        console.log("Mensaje de error");
      }
    })
    this.apiS.saveImages(this.contador, "proyecto", this.selectedFile).subscribe({
      next:(data:any)=>{
        console.log("Mensaje exitoso");
      }, error:(e:any)=>{
        console.log("Mensaje de error");
      }
    })

    localStorage.setItem("contadorP", this.contador.toString())
  
  }


}
