import { Routes } from '@angular/router';
import { LoginComponent } from './Login/login/login.component';
import { registerDispatcher } from '@angular/core/primitives/event-dispatch';
import { RegistroComponent } from './Login/registro/registro.component';
import { NavBarComponent } from './Pages/nav-bar/nav-bar.component';
import { HomeComponent } from './Pages/home/home.component';
import { FormProjectComponent } from './Pages/form-project/form-project.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {path: "login", component: LoginComponent},
    {path: "register", component: RegistroComponent},
    {path: "navBar", component: NavBarComponent},
    {path: "home", component: HomeComponent},
    {path: "form-project", component: FormProjectComponent},
    { path: '**', redirectTo: 'login' }

];
