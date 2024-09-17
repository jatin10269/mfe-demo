import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';
import { AppLayoutComponent } from './layout/app.layout.component';

export const appRoutes: Route[] = [

  // {
  //   path: 'login',
  //   loadChildren: () =>
  //     loadRemoteModule('login', './Component').then((m) => m.NxWelcomeComponent),
  // },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'login',
        loadChildren: () =>
          loadRemoteModule('login', './Routes').then((m) => m.appRoutes),
      }
    ],
  },
];
