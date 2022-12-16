import { Component } from 'solid-js';
import { Row, Col, Container } from 'solid-bootstrap';

const Error: Component = () => {
  return (
    <Container>

      <Row>
        <Col class="border d-flex justify-content-center justify-text-center">
          <h1>Error Page</h1>
        </Col>
      </Row>

      <Row>
        <Col class="border d-flex justify-content-center">
          Some More Stuff
        </Col>
      </Row>

    </Container>
  )
}

export default Error;
