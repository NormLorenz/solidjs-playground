import { Col, Container, Row, Nav } from 'solid-bootstrap';
import { useRoutes } from '@solidjs/router';

import { routes } from './routes';
import { createEffect, onMount } from 'solid-js';
import Store from './store';
// import * as data from './config.json';
// import { default as config } from './config.json';

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
    <Container class="bg-light">

      <Row>
        <Col class="border"></Col>
        <Col class="border d-flex justify-content-center" xs={10} >
          <Nav activeKey="#">
            <Nav.Item>
              <Nav.Link href="#/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#/login">Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#/user">User</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#/users">Users</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#/error" disabled>Disabled</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#/hello">Force Error</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#/settings">Settings</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#/about">About</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col class="border"></Col>
      </Row>

      <Row>
        <Col class="border"></Col>
        <Col class="border d-flex justify-content-center" xs={10} >
          <Routes />
        </Col>
        <Col class="border"></Col>
      </Row>

      <Row>
        <Col class="border d-flex justify-content-center">
          Copyright © 2022 Water Street Works
        </Col>
      </Row>

    </Container>
  );
};

export default App;
