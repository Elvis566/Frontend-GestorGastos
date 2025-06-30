import { Component, inject, signal } from '@angular/core';
import { ServicesService } from '../../Servicios/services.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-d-project',
  imports: [],
  templateUrl: './d-project.component.html',
  styleUrl: './d-project.component.css'
})
export class DProjectComponent {

  activo = signal<boolean>(false)

  constructor(private route: ActivatedRoute, private router: Router){}

  public apiS = inject(ServicesService)
  project:any
  id = signal<number>(0)
  estado =signal<boolean>(true)
  texto:string=""

  ngOnInit(){
    const ID = this.route.snapshot.paramMap.get('id')
    this.id.set(ID ? +ID : 0); 
    this.getProyect()
  }

  getProyect(){
    this.apiS.getProject(this.id()).subscribe({
      next:(data:any)=>{
        this.project = data.PROJECT
        this.estado.set(data.PROJECT.estado)
        this.textTerm(this.estado())
      },error:(e:any)=>{
        console.log(e);
      }
    })
  }

  deleteProject(){
    this.apiS.deleteProject(this.project.id).subscribe()
    this.router.navigate(["/home"])

  }

  textTerm(estado:boolean){
    if(estado){
      this.texto = "Terminar"
    }else{
      this.texto = "Activar"
    }
  }

  activar(valor:number){
      if(valor === 1){
        this.activo.set(true)
      }else{
        this.activo.set(false)
      }
  }

    terminar(){
      this.apiS.terminarProject(this.project.id, this.estado()).subscribe()
      this.router.navigate(["/home"])
    }

    update(id:number){
      
    }





}
