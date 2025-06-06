import { Component } from '@angular/core';
import { ServicesService } from '../../Servicios/services.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  msg:string ="";

  constructor(private apiS: ServicesService, private router:Router){

  }

  login(gmail:any, clave:any){
    debugger
    this.apiS.login(gmail.value, clave.value).subscribe({
      next:(data:any)=>{
        debugger
        this.msg = data.message
        console.log(this.msg);
        localStorage.setItem("userId", data.USER)
        console.log(localStorage.getItem("userId"))
        // localStorage.setItem("condicion", "si" )
        this.router.navigate(["/home"])
      },error:(e:any)=>{

      }
    })
  }

}
