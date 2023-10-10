import { Container, Row, Col } from "react-bootstrap";
import "./index.css";

function ImageCentered() {
  return (
    <Container className="backImagen">
      <Row className="justify-content-center mt-5 mb-5">
        <Col md={8} lg={6} xl={8}>
          <img src="casa.png" className="img-fluid mb-5" alt="logo" />
        </Col>
      </Row>
    </Container>
  );
}

export default ImageCentered;
