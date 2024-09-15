import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';
import {SearchComponent} from '../components/search/search.component'
export const remoteRoutes: Route[] = [
  // { path: '', component: RemoteEntryComponent },
  { path:'', component:SearchComponent}
];
