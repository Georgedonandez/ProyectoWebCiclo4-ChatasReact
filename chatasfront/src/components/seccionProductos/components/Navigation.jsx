import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Offcanvas
} from "react-bootstrap";

export default function Navigation() {
  return (
    <div>
      {/* Inicio de la barra de navegación */}
      <Navbar bg="primary" variant="dark" expand={false}>
        <Container fluid>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Brand href="#">
            <i className="fas fa-drumstick-bite"></i> Productos
          </Navbar.Brand>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Chata's
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="https://chatasreactweb-front.herokuapp.com/">Inicio</Nav.Link>
                <NavDropdown title="Productos" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="#action2">
                    <i class="fas fa-hamburger"></i> Res{" "}
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action3">
                    <i class="fas fa-bacon"></i> Cerdo{" "}
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    <i className="fas fa-drumstick-bite"></i> Pollo{" "}
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="colocaracaseccionnoticias">Noticias</Nav.Link>
                <Nav.Link href="colocarfooter">Contactenos</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      {/* Fin de la barra de navegación */}
    </div>
  );
}
