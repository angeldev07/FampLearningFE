import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/routes/auth.routes').then(a => a.AUTH_ROUTES)
  },

  {
    path: '**',
    redirectTo: '/auth',
    pathMatch: 'full'
  }
];
