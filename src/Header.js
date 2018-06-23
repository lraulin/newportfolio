import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  NavLink,
  NavbarToggler,
} from "reactstrap";
import { LinkContainer } from "react-router-bootstrap";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div>
        <Navbar
          expand="md"
          className="navbar navbar-expand-lg navbar-dark bg-primary"
        >
          <LinkContainer to="/">
            <NavbarBrand className="navbar-brand">Lee Raulin</NavbarBrand>
          </LinkContainer>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="navbar-nav ml-auto">
              <NavItem className="nav-item">
                <LinkContainer to="/bio">
                  <NavLink className="nav-link">Bio</NavLink>
                </LinkContainer>
              </NavItem>
              <NavItem className="nav-item">
                <LinkContainer to="/projects">
                  <NavLink className="nav-link">Projects</NavLink>
                </LinkContainer>
              </NavItem>
              <NavItem className="nav-item">
                <LinkContainer to="/resume">
                  <NavLink className="nav-link">Resume</NavLink>
                </LinkContainer>
              </NavItem>
              <NavItem className="nav-item">
                <LinkContainer to="/contact">
                  <NavLink className="nav-link">Contact</NavLink>
                </LinkContainer>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
