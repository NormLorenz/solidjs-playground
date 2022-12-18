import { Col, Container, Row } from "solid-bootstrap";

const Settings = () => {

  return (
    <>
      <Container>

        <Row>
          <Col class="border d-flex justify-content-center">
            <h1>Settings Page</h1>
          </Col>
        </Row>

        <Row>
          <Col class="border d-flex justify-content-center">
            Themes Dark/Light
            Type  Expert/Novice
            To Do List
          </Col>
        </Row>

      </Container>
    </>
  );
};

export default Settings;
