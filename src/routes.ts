import { lazy } from 'solid-js';
import type { RouteDefinition } from '@solidjs/router';

import Home from './pages/home';
// import AboutData from './pages/about.data';

export const routes: RouteDefinition[] = [
  {
    path: ['/', '/home'],
    component: Home,
    // data: AboutData,
    // children:
  },
  {
    path: '/users',
    component: lazy(() => import('./pages/Users')),
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
