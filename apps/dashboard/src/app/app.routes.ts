import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';

export const appRoutes: Route[] = [
  {
    path: 'product-detail',
    loadChildren: () =>
      loadRemoteModule('product-detail', './Routes').then(
        (m) => m.remoteRoutes
      ),
  },
  {
    path: 'product-search',
    loadChildren: () =>
      loadRemoteModule('product-search', './Routes').then(
        (m) => m.remoteRoutes
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      loadRemoteModule('login', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
