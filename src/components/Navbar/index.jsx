// Navbar.js
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./index.css";
import reactLogo from "../../assets/react.svg";

function CustomNavbar() {
  return (
    <Navbar className="navbar-custom" bg="transparent" expand="lg">
        <Container>
          <Navbar.Brand href="#"><img src={reactLogo} alt="logo" className="logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto justify-content-end"> {/* Añade la clase justify-content-end */}
              <Nav.Link href="#">Inicio</Nav.Link>
              <Nav.Link href="#">Acerca de</Nav.Link>
              <Nav.Link href="#">Servicios</Nav.Link>
              <Nav.Link href="#">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default CustomNavbar;
