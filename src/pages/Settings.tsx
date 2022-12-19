import { Button, Col, Container, Row } from "solid-bootstrap";

import Store from '../store';

const Settings = () => {

  const [store, setStore] = Store;

  return (
    <Container>

      <Row>
        <Col class="border d-flex justify-content-center">
          <h1>Settings Page</h1>
        </Col>
      </Row>

      <Row>
        <Col class="border d-flex justify-content-center">
          <Button onClick={() => setStore({ theme: 'dark' })}>Dark</Button>
          <Button onClick={() => setStore({ theme: 'light' })}>Light</Button>
          <Button onClick={() => setStore({ mode: 'expert' })}>Expert</Button>
          <Button onClick={() => setStore({ mode: 'novice' })}>Novice</Button>
        </Col>
      </Row>

    </Container>
  );
};

export default Settings;
