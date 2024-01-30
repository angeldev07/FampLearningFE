import {Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/routes/auth.routes').then(a => a.AUTH_ROUTES)
  },

  {
    path: 'admin',
    component: DashboardComponent,
    loadChildren: () => import('./admin/admin.routes').then(a => a.ADMIN_ROUTES)
  },
  {
    path: '**',
    redirectTo: 'auth',
    pathMatch: 'full'
  }
];
