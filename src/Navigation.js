import React from 'react'
import logo from './logo.svg'
import {Navbar, Nav} from 'react-bootstrap'

const navItems = [
  {
    id: 1,
    link: 'todo',
    text: 'Todo',
  },
  {
    id: 2,
    link: 'router',
    text: 'Router',
  },
  {
    id: 3,
    link: 'placeholder',
    text: 'Placeholder',
  },
  {
    id: 4,
    link: 'kappa',
    text: 'Kappa',
  },
]

const getNavbarItems = navItems.map(props => {
  return (
    <Nav.Item key={props.id}>
      <Nav.Link key={props.id} href={props.link}>
        {props.text}
      </Nav.Link>
    </Nav.Item>
  )
})

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
          <Nav>{getNavbarItems}</Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Navigation
