import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./list/listdemo.component').then((m) => m.ListDemoComponent),
  },
];
