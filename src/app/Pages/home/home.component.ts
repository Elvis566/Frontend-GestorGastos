import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ListaPComponent } from '../lista-p/lista-p.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ListaPComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(){
    // localStorage.setItem("condicion", "si" )
  }

}
