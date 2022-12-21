import { useRoutes } from '@solidjs/router';

import { routes } from './routes';
import { createEffect, onMount } from 'solid-js';
import Store from './store';

const Routes = useRoutes(routes);
const { localStorage } = window;
const [store, setStore] = Store;

const App = () => {

  onMount(() => {

    console.log('onMount');

    // initialize local storage if necessary
    const settings = { mode: 'novice', theme: 'light' };
    if (localStorage.getItem('settings') === null) {
      localStorage.setItem('settings', JSON.stringify(settings));
    }

    // save local storage to global storage
    const settingsStringified = localStorage.getItem('settings');
    if (settingsStringified !== null) {
      const settings = JSON.parse(settingsStringified);
      setStore({ mode: settings.mode });
      setStore({ theme: settings.theme });
    }
  });

  createEffect(() => {
    console.log('mode: ', store.mode);
    console.log('theme: ', store.theme);
    const settings = { mode: store.mode, theme: store.theme };
    localStorage.setItem('settings', JSON.stringify(settings));
  });

  return (
    <div class="bg-light">

      <div>
        <div class="border"></div>
        <div class="border d-flex justify-content-center" >
          <ul>
            <a href="#/">Home
            </a>
            <a href="#/login">Login
            </a>
            <a href="#/user">User
            </a>
            <a href="#/users">Users
            </a>
            <a href="#/error">Disabled
            </a>
            <a href="#/hello">Force Error
            </a>
            <a href="#/settings">Settings
            </a>
            <a href="#/about">About
            </a>
          </ul>
        </div>
        <div class="border"></div>
      </div>

      <div>
        <div class="border"></div>
        <div class="border d-flex justify-content-center"  >
          <Routes />
        </div>
        <div class="border"></div>
      </div>

      <div>
        <div class="border d-flex justify-content-center">
          Copyright © 2022 Water Street Works
        </div>
      </div>

    </div>
  );
};

export default App;
