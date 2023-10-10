// Cover.js
//import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./index.css";

import CustomNavbar from "../Navbar";

function Cover() {
  return (
    <>
      <div
  className="container-fluid p-5 bg-light position-relative"
  style={{
    backgroundImage: `url(slider.png)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
  }}
>
  <Container className="position-relative">
    <CustomNavbar />
    <div className="text-white text-center">
      <div className="content-container">
        <h1 className="display-4">Bienvenido a Mi Sitio Web</h1>
        <p className="lead">
          Un lugar para descubrir todo lo que necesitas.
        </p>
        <Button variant="primary" size="lg">
          Más información
        </Button>
      </div>
    </div>
  </Container>
</div>
    </>
  );
}

export default Cover;
