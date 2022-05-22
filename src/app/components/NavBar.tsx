import React, { useState } from "react";
import {
  Button,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Stack,
} from "react-bootstrap";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Link,
} from "react-router-dom";
import { KEYS } from "../constants/contants";
import { init } from "../services/ethers-service";
import { getStorageValue } from "../services/storage-service";
// import SignUp from "../../modules/auth/pages/SignUp";
// import Dashboard from "../../modules/dashboard/pages/Dashboard";
// import Profile from "../../modules/profile/pages/Profile";
// import CreateBounty from "../../modules/bounty/pages/CreateBounty"
// import Header from "./Header";

interface Props {}

const NavBar: React.FC<Props> = (props: Props) => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    init().then((account: any) => {
      if (account) {
        console.log(getStorageValue(KEYS.PRNTS_PUBLIC_KEY));
      }
    });
  };

  const renderContainer = () => (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">PRNTS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/")}>Projects</Nav.Link>
            <Nav.Link onClick={() => navigate("/staking")}>Staking</Nav.Link>
            <Nav.Link onClick={() => navigate("/rewards")}>
              Add Rewards
            </Nav.Link>
            <NavDropdown title="Profile" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Logout</NavDropdown.Item>
            </NavDropdown>
            <Button variant="outline-primary" onClick={() => login()}>
              Login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

  return renderContainer();
};

export default NavBar;
