import { createEffect, Suspense } from 'solid-js';
import { useRouteData } from '@solidjs/router';
import { Col, Container, Row, Spinner } from 'solid-bootstrap';

const About = () => {
  const name = useRouteData<() => string>();

  createEffect(() => {
    console.log(name);
  });

  return (
    <Container>

      <Row>
        <Col class="border d-flex justify-content-center">
          <h1>About Page</h1>
        </Col>
      </Row>

      <Row>
        <Col class="border d-flex justify-content-center">
          <p>A page all about this website.</p>
        </Col>
      </Row>

      <Row>
        <Col class="border d-flex justify-content-center">
          <p>
            <span>We love</span>
            <Suspense fallback={<span>&nbsp;<Spinner animation="border" size="sm" /></span>}>
              <span>&nbsp;{name}</span>
            </Suspense>
          </p>
        </Col>
      </Row>

    </Container>
  );
}

export default About;
