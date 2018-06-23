import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => (
  <Navbar>
    <Navbar.Header>
      <LinkContainer to="/">
        <Navbar.Brand>Lee Raulin</Navbar.Brand>
      </LinkContainer>
    </Navbar.Header>
    <Nav>
      <LinkContainer to="/bio">
        <NavItem eventKey={1}>Bio</NavItem>
      </LinkContainer>
      <LinkContainer to="/projects">
        <NavItem eventKey={2}>Projects</NavItem>
      </LinkContainer>
      <LinkContainer to="/resume">
        <NavItem eventKey={3}>Resume</NavItem>
      </LinkContainer>
      <LinkContainer to="contact">
        <NavItem eventKey={4}>Contact</NavItem>
      </LinkContainer>
    </Nav>
  </Navbar>
);

export default Header;
