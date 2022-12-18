import { Container, Row, Col } from 'solid-bootstrap';

import logo from '../logo.svg';
import styles from '../App.module.css';

const Home = () => {
  return (
    <Container>

      <Row>
        <Col class="border d-flex justify-content-center">
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
