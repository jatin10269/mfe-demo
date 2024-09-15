import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';
import { DetailComponent } from '../components/detail/detail.component';

export const remoteRoutes: Route[] = [
  { path: '', component: DetailComponent },
];
