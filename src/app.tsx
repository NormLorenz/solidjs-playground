import { Component, lazy } from 'solid-js';
import { Routes, Route } from '@solidjs/router';
import { Col, Container, Row, Nav } from 'solid-bootstrap';

const Home = lazy(() => import('./pages/Home'));
const Users = lazy(() => import('./pages/Users'));
const Error = lazy(() => import('./pages/Error'));

const App: Component = () => {
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
              <Nav.Link href="#/users">Users</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#/error" disabled>Disabled</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#/dkdkdk">Force Error</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col class="border"></Col>
      </Row>

      <Row>
        <Col class="border"></Col>
        <Col class="border d-flex justify-content-center" xs={10} >
          <Routes>
            <Route path='/' component={Home} />
            <Route path='/users' component={Users} />
            <Route path={['login', 'sign-up']} element={<h1>This is the login/sign up screen</h1>} />
            <Route path='**' component={Error} />
          </Routes>
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
