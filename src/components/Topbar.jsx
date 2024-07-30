import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Topbar() {
  return (
    <>
      <Navbar bg='light' data-bs-theme='light'>
        <Container>
          <Navbar.Brand href='/'>UserHub</Navbar.Brand>
          <Nav className='ml-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/dashboard'>Dashboard</Nav.Link>
            <Nav.Link href='/add-user'>Add User</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Topbar;
