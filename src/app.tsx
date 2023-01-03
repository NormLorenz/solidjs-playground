import { useRoutes } from '@solidjs/router';
import { Component, createEffect, onMount } from 'solid-js';

import { routes } from './routes';
import Store from './store';
import Footer from './fragments/Footer';
import Menu from './fragments/Menu';

const Routes = useRoutes(routes);
const { localStorage } = window;
const [store, setStore] = Store;

const App: Component = () => {

  onMount(() => {

    console.log('onMount ', new Date());

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

  return (
    <div class="container bg-light">
      <div class="row pt-2">
        <div>
          <Menu />
        </div>
      </div>

      <div class="row pt-2">
        <div class="col d-flex justify-content-center border">
          <Routes />
        </div>
      </div>

      <div class="row pt-2">
        <div class="col d-flex justify-content-center border fixed-bottom">
          <Footer />
        </div>
      </div>

    </div>
  );
};

export default App;
