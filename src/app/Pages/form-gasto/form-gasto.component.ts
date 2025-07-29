import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog'
import { ServicesService } from '../../Servicios/services.service';

@Component({
  selector: 'app-form-gasto',
  imports: [MatDialogModule],
  templateUrl: './form-gasto.component.html',
  styleUrl: './form-gasto.component.css'
})
export class FormGastoComponent {

 public apiS = inject(ServicesService)

 MANEJADOR = [
  { id: 1, criterio: 'Gasto' },
  { id: 2, criterio: 'Ganancia' }
];

ID: number = parseInt(localStorage.getItem("idProject") || "0")



ingreso(elemento:any, valor:any){
  console.log(valor.value);
  let gasto:number = 0
  let ganancia:number = 0

  if(elemento.value == 1){
    gasto = valor.value
  }else if(elemento.value == 2){
    ganancia = valor.value
  }
  this.apiS.ingresosProject(this.ID, gasto, ganancia).subscribe()
}



}
