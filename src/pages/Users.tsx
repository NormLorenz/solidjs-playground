import { Component } from 'solid-js';
import { Card, Button, Row, Col, Container } from 'solid-bootstrap';

const Users: Component = () => {
  return (
    <Container>

      <Row>
        <Col class="border d-flex justify-content-center">
          <h1>Users Page</h1>
        </Col>
      </Row>

      <Row>
        <Col class="border d-flex justify-content-center">
          <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src="/src/assets/german-compounds.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </Container>
  )
}

export default Users;
