import { Component } from 'solid-js';
import { Container, Row, Col } from 'solid-bootstrap';

import logo from '../logo.svg';
import styles from '../App.module.css';

const Home: Component = () => {
  return (
    <Container>

      <Row>
        <Col class="border d-flex justify-content-center justify-text-center">
          <h1>Home Page</h1>
        </Col>
      </Row>

      <Row>
        <Col class="border d-flex justify-content-center">
          <img src={logo} class={styles.logo} alt="logo" />
        </Col>
      </Row>

    </Container>
  )
}

export default Home;
