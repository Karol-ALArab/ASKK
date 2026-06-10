import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideRouter, Routes } from '@angular/router';
import { Home } from './app/pages/home/home';

// defining all routes and setting up lazy loading
const routes: Routes = [

  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: Home }, // eager load home page
  { path: 'about', loadComponent: () => import('./app/pages/about/about').then((m) => m.About) },
  { path: 'contact', loadComponent: () => import('./app/pages/contact/contact').then((m) => m.Contact) },
  { path: 'projects', loadComponent: () => import('./app/pages/projects/projects').then((m) => m.Projects) },
  { path: 'services', loadComponent: () => import('./app/pages/services/services').then((m) => m.Services) },
  {path: '**', component: Home}
];

bootstrapApplication(App, {
  providers: [provideRouter(routes)],
}).then((r) => console.log('Bootstrap successful'));
