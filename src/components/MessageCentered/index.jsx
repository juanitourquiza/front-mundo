import { Container, Row, Col } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
function MessageCentered({ message }) {
  return (
    <Container>
      <Row className="justify-content-center mt-5 mb-5">
        <Col md={8} lg={6} xl={8} >
          <h1>We Help Businesses</h1>
          <p>Grow and Innovate</p>
          <p>{message}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default MessageCentered;
