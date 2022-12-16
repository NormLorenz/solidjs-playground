import { Component } from 'solid-js';

import { Card, Button } from 'solid-bootstrap';

const Users: Component = () => {
  return (
    <>
      <div class="row d-flex justify-content-center">
        <div class="col-md-3">
          <h1>Users Page</h1>
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
        </div>
      </div>
    </>
  )
}

export default Users;
