import { Component, inject } from '@angular/core';
import { ServicesService } from '../../Servicios/services.service';

@Component({
  selector: 'app-lista-p',
  imports: [],
  templateUrl: './lista-p.component.html',
  styleUrl: './lista-p.component.css'
})
export class ListaPComponent {
  message:string = "";
  PROJECTS: any

  public apiS = inject(ServicesService);

  ngOnInit(){
    this.getProjects()
  }

  getProjects(){
    const userId = parseInt(localStorage.getItem("userId") || "0")

    this.apiS.getProjects(userId).subscribe({
      next:(data:any)=>{
        this.PROJECTS = data.PROJECTS;
        this.message = data.message;

      },error:(e:any)=>{
        console.log("Error");
      }
    })
  }

}
