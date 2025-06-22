import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ServicesService } from '../../Servicios/services.service';

@Component({
  selector: 'app-registro',
  imports: [RouterLink],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  constructor(private router: Router){

  }
  

  public apiS = inject(ServicesService)



  saveUser(email:any, clave:any, apodo:any){
    debugger
    this.apiS.saveUser(email.value, clave.value, apodo.value).subscribe({
      next:(data:any)=>{
       
        localStorage.setItem("userId", data.USER.id)
        console.log(localStorage.getItem("userId"))
         this.router.navigate(["/home"])
        localStorage.setItem("contadorP", "0")
      },error:(e:any)=>{
        console.log(e);
      }
    })
  }
}
