import { RouteDefinition } from '@solidjs/router/dist/types';
import { lazy } from 'solid-js';

import Home from './pages/Home/Home';
import AboutData from './services/about.service';

export const routes: RouteDefinition[] = [
  {
    path: ['/'],
    component: Home,
  },
  {
    path: '/user',
    component: lazy(() => import('./pages/User/User')),
  },
  {
    path: '/settings',
    component: lazy(() => import('./pages/Settings/Settings')),
  },
  {
    path: '/about',
    component: lazy(() => import('./pages/About')),
    data: AboutData,
  },
  {
    path: '/bookshelf',
    component: lazy(() => import('./pages/BookShelf/BookShelf')),
  },
  {
    path: '/tasks',
    component: lazy(() => import('./pages/Tasks/Tasks')),
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
