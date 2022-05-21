import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SignUp from "../../modules/auth/pages/SignUp";
// import Dashboard from "../../modules/dashboard/pages/Dashboard";
// import Profile from "../../modules/profile/pages/Profile";
// import CreateBounty from "../../modules/bounty/pages/CreateBounty"
// import Header from "./Header";

interface Props {}

const NavBar: React.FC<Props> = (props: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const renderContainer = () => (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

  return renderContainer();
};

export default NavBar;
