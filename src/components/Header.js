import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Header = ({ isLoggedIn, onShowLogin, onShowSignup, onLogout, onShowCart }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Navbar.Brand href="#">Club Curry</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          {isLoggedIn ? (
            <Button variant="outline-light" onClick={onLogout}>
              Logout
            </Button>
          ) : (
            <>
              <Button variant="outline-light" onClick={onShowLogin} className="mr-2">
                Login
              </Button>
              <Button variant="outline-light" onClick={onShowSignup}>
                Sign Up
              </Button>
            </>
          )}
          <Nav.Link href="#cart" onClick={onShowCart}>
            <i className="fas fa-shopping-cart"></i> Cart
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
