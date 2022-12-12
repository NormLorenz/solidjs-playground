/* @refresh reload */
// import 'windi.css';

import { render } from 'solid-js/web';
import { Router } from '@solidjs/router';
import App from './app';

/**
 * This file was taken from the cheatsheet example of bootstrap.
 * You will most likely remove it if using this template.
 */
import './cheatsheet.scss';

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById('root') as HTMLElement,
);
