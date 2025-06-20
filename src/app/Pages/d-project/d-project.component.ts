import { Component, inject, signal } from '@angular/core';
import { ServicesService } from '../../Servicios/services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-d-project',
  imports: [],
  templateUrl: './d-project.component.html',
  styleUrl: './d-project.component.css'
})
export class DProjectComponent {

  activo = signal<boolean>(false)

  constructor(private route: ActivatedRoute){

  }

  public apiS = inject(ServicesService)
  project:any
  id = signal<number>(0)

  ngOnInit(){
    const ID = this.route.snapshot.paramMap.get('id')
    this.id.set(ID ? +ID : 0); 
    this.getProyect()
  }

  getProyect(){
    this.apiS.getProject(this.id()).subscribe({
      next:(data:any)=>{
        this.project = data.PROJECT
      },error:(e:any)=>{
        console.log(e);
      }
    })
  }

  activar(valor:number){
    if(valor === 1){
      this.activo.set(true)
    }else{
      this.activo.set(false)
    }
  }



}
