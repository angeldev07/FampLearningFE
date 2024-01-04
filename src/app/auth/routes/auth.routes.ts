import { Routes } from '@angular/router';
import {AuthComponent} from "../auth.component";

export const AUTH_ROUTES : Routes = [

  {
    path: 'iniciar-sesion',
    component: AuthComponent
  },

  {
    path: '**',
    redirectTo: 'iniciar-sesion',
    pathMatch: 'full'
  }
]
