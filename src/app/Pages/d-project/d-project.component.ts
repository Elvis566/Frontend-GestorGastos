import { Component, inject, signal } from '@angular/core';
import { ServicesService } from '../../Servicios/services.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-d-project',
  imports: [RouterLink],
  templateUrl: './d-project.component.html',
  styleUrl: './d-project.component.css'
})
export class DProjectComponent {

  activo = signal<boolean>(false)

  constructor(private route: ActivatedRoute, private router: Router){}

  public apiS = inject(ServicesService)
  project:any
  images:any
  id = signal<number>(0)
  estado =signal<boolean>(true)
  texto:string=""
  selectedFile:File | null = null;


  onFileSelected(event: any):void {
    const file = event.target.files[0];
    
    if(file){
      this.selectedFile = file
    }
  }

    recargarComponente() {
    const url = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([url]);
    });
  }

  ngOnInit(){
    const ID = this.route.snapshot.paramMap.get('id')
    this.id.set(ID ? +ID : 0); 
    this.getProyect()
    this.getImages()
  }

  saveImages(){
    this.apiS.saveImages(this.id(), "proyecto", this.selectedFile).subscribe({
      next:(data:any)=>{
        console.log("Mensaje exitoso");
      }, error:(e:any)=>{
        console.log("Mensaje de error");
      }
    })

    this.recargarComponente()

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

    getImages(){
      console.log(this.id());
      debugger
      this.apiS.getImages(this.id()).subscribe({
        next:(data:any)=>{
          this.images = data.FOTOS
          console.log(this.images);
        },error:(e:any)=>{
          console.log(e);
        }
      })
    }

    





}
