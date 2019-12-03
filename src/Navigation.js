import React from 'react'
import logo from './logo.svg'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

class Navigation extends React.Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        fixed="top"
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand href="#main">
          <img src={logo} className="App-logo" alt="logo" />
          aleksander.klebek
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Item>
              <Nav.Link href="#todo">Todo</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#router">Router</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <NavDropdown
                title="Dropdown"
                id="collapsible-nav-dropdown"
              >
                <NavDropdown.Item href="#dropdown/3.1">
                  1
                </NavDropdown.Item>
                <NavDropdown.Item href="#dropdown/3.2">
                  2
                </NavDropdown.Item>
                <NavDropdown.Item href="#dropdown/3.3">
                  3
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#dropdown/3.4">
                  4
                </NavDropdown.Item>
              </NavDropdown>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#placeholder">placeholder</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#placeholder">placeholder</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Navigation
