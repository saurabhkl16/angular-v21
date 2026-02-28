import { Routes } from '@angular/router';
import { App } from './app';
import { About } from './about/about';
import { Login } from './login/login';
import { Pages } from './pages/pages';
import { Error } from './error/error';
import { Profile } from './profile/profile';

export const routes: Routes = [
  { path: '', component: App },
  { path: 'about', component: About },
  { path: 'login', component: Login },
  { path: 'pages', component: Pages },
  { path: 'profile', component: Profile },
  { path: '**', redirectTo: '' },
  //   { path: '**', component: Error },
];
