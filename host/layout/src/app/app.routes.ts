import { Route } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
    ]
  },
];
