import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LoginComponent } from './Login/login/login.component';
import { NavBarComponent } from './Pages/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private router: Router){
  }

    shouldShowNavBar(){
    // Oculta nav-bar si estás en /login o /register
     let ver =  !(this.router.url.includes('/login') || this.router.url.includes('/register'))

    return ver
  }
  
}
