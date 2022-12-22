import { useRoutes } from '@solidjs/router';
import { createEffect, onMount } from 'solid-js';

import { routes } from './routes';
import Store from './store';
import Footer from './fragments/Footer';
import Menu from './fragments/Menu';

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
    <div class="container bg-light">
      <div class="row">
        <Menu />
      </div>

      <div class="row">
        <div class="col d-flex justify-content-center border">
          <Routes />
        </div>
      </div>

      <div class="row">
        <div class="col d-flex justify-content-center border fixed-bottom">
          <Footer />
        </div>
      </div>

    </div>
  );
};

export default App;
