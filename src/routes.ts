import { RouteDefinition } from '@solidjs/router/dist/types';
import { lazy } from 'solid-js';

import Home from './pages/home';
import AboutData from './services/about.service';
import UserData from './services/user.service';

export const routes: RouteDefinition[] = [
  {
    path: ['/'],
    component: Home,
  },
  {
    path: '/user',
    component: lazy(() => import('./pages/User')),
    data: UserData,
  },
  {
    path: '/users',
    component: lazy(() => import('./pages/Users')),
  },
  {
    path: '/settings',
    component: lazy(() => import('./pages/Settings')),
  },
  {
    path: '/about',
    component: lazy(() => import('./pages/About')),
    data: AboutData,
  },
  {
    path: ['login', 'sign-up'],
    component: lazy(() => import('./pages/Auth')),
  },
  {
    path: '**',
    component: lazy(() => import('./pages/Error')),
  },
];
