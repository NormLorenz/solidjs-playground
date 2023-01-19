import { useRoutes } from '@solidjs/router';
import { Component, onMount } from 'solid-js';

import { routes } from './routes';
import Footer from './fragments/Footer';
import Menu from './fragments/Menu';
import Toast from './fragments/Toast';

const Routes = useRoutes(routes);

const App: Component = () => {

  onMount(() => {
    console.log('onMount ', new Date());
  });

  return (
    <div class="container">
      
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
        <div class="col d-flex justify-content-center border">
          <Footer />
        </div>
      </div>

      <div>
        <Toast />
      </div>

    </div>
  );
};

export default App;
