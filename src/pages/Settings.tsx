import { Button, Col, Container, Row } from "solid-bootstrap";
import { createEffect } from "solid-js";

import Store from '../store';

const Settings = () => {

  const [store, setStore] = Store;

  createEffect(() => {
    console.log('mode 2: ', store.mode);
    console.log('theme 2: ', store.theme);
    const settings = { mode: store.mode, theme: store.theme };
    localStorage.setItem('settings', JSON.stringify(settings));
  });

  return (
    <Container>

      <Row>
        <Col class="border d-flex justify-content-center">
          <h1>Settings Page</h1>
        </Col>
      </Row>

      <Row>
        <Col class="border d-flex justify-content-center">
          <Button onClick={() => setStore({ theme: 'dark' })} disabled={store.theme === 'dark'}>Dark</Button>
          <Button onClick={() => setStore({ theme: 'light' })} disabled={store.theme === 'light'}>Light</Button>
          <Button onClick={() => setStore({ mode: 'expert' })} disabled={store.mode === 'expert'}>Expert</Button>
          <Button onClick={() => setStore({ mode: 'novice' })} disabled={store.mode === 'novice'}>Novice</Button>
        </Col>
      </Row>

    </Container>
  );
};

export default Settings;
