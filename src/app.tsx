import { Col, Container, Row, Nav } from 'solid-bootstrap';
import { useRoutes } from '@solidjs/router';

import { routes } from './routes';

const Routes = useRoutes(routes);

const App = () => {
  
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
          Copyright © 2020 Water Street Works
        </Col>
      </Row>

    </Container>
  );
};

export default App;
