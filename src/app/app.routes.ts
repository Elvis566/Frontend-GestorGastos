import { Routes } from '@angular/router';
import { LoginComponent } from './Login/login/login.component';
import { registerDispatcher } from '@angular/core/primitives/event-dispatch';
import { RegistroComponent } from './Login/registro/registro.component';

export const routes: Routes = [
    {path: "login", component: LoginComponent},
    {path: "register", component: RegistroComponent}
];
