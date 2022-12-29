/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, hashIntegration } from '@solidjs/router';
import 'bootstrap/scss/bootstrap.scss';

import App from './App';

render(() => (
  <Router source={hashIntegration()}>
    <App />
  </Router>
),
  document.getElementById('root') as HTMLElement);
