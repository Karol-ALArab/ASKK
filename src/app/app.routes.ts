
import { Home } from './pages/home/home';
import {Routes} from '@angular/router';
import { PageNotFound } from './pages/page-not-found/page-not-found';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: Home }, // eager load home page
  { path: 'about', loadComponent: () => import('./pages/about/about').then((m) => m.About) },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects').then((m) => m.Projects),
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services').then((m) => m.Services),
  },
  {
    path: 'projects/:id',
    loadComponent: () =>
      import('./pages/project-detail/project-detail').then((m) => m.ProjectDetail),
  },
  { path: '**', component: PageNotFound },
];
