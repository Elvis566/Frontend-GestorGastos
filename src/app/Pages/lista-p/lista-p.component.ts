import { Component, effect, inject, signal } from '@angular/core';
import { ServicesService } from '../../Servicios/services.service';
import { single } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-p',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './lista-p.component.html',
  styleUrl: './lista-p.component.css'
})
export class ListaPComponent {

  public apiS = inject(ServicesService);

  userId = signal<number>(parseInt(localStorage.getItem("userId") || "0"));
  message = signal<string>("");
  PROJECTS = signal<any[]>([])

  
  constructor(){
    effect(() => {
      const _ = this.apiS.refresh$();  // reactivo
      this.getProjects();              // se ejecuta cuando cambia
    });
  }


  getProjects(){

    this.apiS.getProjects(this.userId()).subscribe({
      next:(data:any)=>{
        this.PROJECTS.set(data.PROJECTS);
        this.message.set(data.message);

      },error:(e:any)=>{
        console.log("Error");
      }
    })
  }

}
