import { useRoutes } from '@solidjs/router';
import { createEffect, onMount } from 'solid-js';

import { routes } from './routes';
import Store from './store';
import Footer from './fragments/Footer';

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
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#"><img src="/src/assets/solidjs.svg" alt="Solidjs" width="150px" height="120px" /></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#login">Login</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#/settings">Settings</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#/404">404 Error</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#/user">User</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled">Disabled</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    More Links
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#/about">About</a>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>

      <div class="row">
        <div class="col d-flex justify-content-center border"  >
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
