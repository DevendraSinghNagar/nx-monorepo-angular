import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'request',
    loadChildren: () =>
      import('@nx-monorepo-angular/request').then((m) => m.RequestModule),
  },
  {
    path: 'workorder',
    loadChildren: () =>
      import('@nx-monorepo-angular/workorder').then((m) => m.WorkorderModule),
  },
  {
    path: '',
    redirectTo: 'request',
    pathMatch: 'full',
  },
];
