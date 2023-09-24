import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'groups',
    loadComponent: () => import('./pages/groups/groups.page').then( m => m.GroupsPage)
  },
  {
    path: 'groups/:groupId',
    loadComponent: () => import('./pages/messages/messages.page').then( m => m.MessagesPage)
  },
];
