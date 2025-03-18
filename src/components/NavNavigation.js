import { Navbar, Nav, Container } from 'react-bootstrap';
import React from 'react';
import '../styles/NavNavigation.css';

function Navigation() {
  return (
    <div>
      <Navbar expand="lg" className="fixed">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="Navigation">
              <Nav.Link href="/" className="Nav">Bagues</Nav.Link> 
              <Nav.Link href="/" className="Nav">Montre</Nav.Link> 
              <Nav.Link href="/" className="Nav">Bijoux</Nav.Link> 
              <Nav.Link href="/" className="Nav">Colliers</Nav.Link> 
              <Nav.Link href="/" className="Nav">Dimand</Nav.Link>
              <Nav.Link href="/" className="Nav">New</Nav.Link>
              <Nav.Link href="/" className="Nav">Collection</Nav.Link>
              <Nav.Link href="/" className="Nav">Cadeaux</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
