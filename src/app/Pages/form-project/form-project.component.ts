import { Component, inject, signal } from '@angular/core';
import { Project } from '../../Interfaces/project';
import { ServicesService } from '../../Servicios/services.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-project',
  imports: [],
  templateUrl: './form-project.component.html',
  styleUrl: './form-project.component.css'
})
export class FormProjectComponent {


  constructor(private router: Router, private route: ActivatedRoute){}

  id = signal<number>(0)
  userId:number = parseInt(localStorage.getItem("userId") || "0") 
  contador:number = 0;
  selectedFile:File | null = null;

  projectS: Project = {
    titulo:"",
    descripcion: ""
  }

  public apiS = inject(ServicesService)

  ngOnInit(){
    const ID = this.route.snapshot.paramMap.get('id')
    this.id.set(ID ? +ID : 0); 
    if(this.id()>0){
      this.getProject()
    }
  }

  onFileSelected(event: any):void {
    const file = event.target.files[0];
    
    if(file){
      this.selectedFile = file
    }
  }

  getProject(){
    this.apiS.getProject(this.id()).subscribe({
      next:(data:any)=>{
        this.projectS.titulo = data.PROJECT.titulo
        this.projectS.descripcion = data.PROJECT.descripcion
      }
    })
  }


  saveProject(titulo:string, descripcion:string) {
    this.apiS.getCounterProject().subscribe({
      next:(data:any)=>{
        this.contador = data.countProject
      },error:(e:any)=>{
        console.log(e);
      }
    })
    // this.contador = parseInt(localStorage.getItem("contadorP") || "0") + 1
    this.apiS.createProject(titulo, descripcion, this.userId).subscribe({
      next:(data:any)=>{
        this.apiS.triggerRefresh();
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

    // localStorage.setItem("contadorP", this.contador.toString())

    this.router.navigate(["/home"])
  
  }

  probador(){
    
  }

  Comprobante(titulo:string, descripcion:string){
    if(this.id() == 0){
      this.saveProject(titulo, descripcion)
    }else{
      this.apiS.updateProject(titulo, descripcion, this.id()).subscribe()
      this.apiS.saveImages(this.contador, "proyecto", this.selectedFile).subscribe({
        next:(data:any)=>{
          console.log("Mensaje exitoso");
        }, error:(e:any)=>{
          console.log("Mensaje de error");
        }
      })
      this.router.navigate(["/d-project/"+ this.id()])

    }
  }


}
