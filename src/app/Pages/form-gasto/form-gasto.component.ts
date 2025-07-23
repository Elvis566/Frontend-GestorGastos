import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog'

@Component({
  selector: 'app-form-gasto',
  imports: [MatDialogModule],
  templateUrl: './form-gasto.component.html',
  styleUrl: './form-gasto.component.css'
})
export class FormGastoComponent {
 MANEJADOR = [
  { id: 1, criterio: 'Gasto' },
  { id: 2, criterio: 'Ganancia' }
];

@Input() show = false 
@Output() close = new EventEmitter<void>();

closePopup(){
  this.close.emit();
}



}
