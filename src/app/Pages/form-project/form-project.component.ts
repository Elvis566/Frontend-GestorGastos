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

  project:Project; 
  contador:number = 1;
  userId:number = parseInt(localStorage.getItem("userId") || "0") 

  constructor(){
  this.project = {
    // titulo: '',
    // descripcion: '',
    selectedFile: null
  };

  }

  public apiS = inject(ServicesService)

  onFileSelected(event: any) {
    this.project.selectedFile = event.target.files[0];
  }

  saveProject(titulo:string, descripcion:string) {
    this.apiS.createProject(titulo, descripcion, this.userId).subscribe({
      next:(data:any)=>{
        console.log("Mensaje exitoso");
      }, error:(e:any)=>{
        console.log("Mensaje de error");
      }
    })

    this.apiS.saveImages(this.contador, "proyecto", this.project.selectedFile).subscribe({
      next:(data:any)=>{
        console.log("Mensaje exitoso");
      }, error:(e:any)=>{
        console.log("Mensaje de error");
      }
    })
  
  }


}
