import React from 'react'
import {Link} from '@reach/router'
import {Navbar, Nav, Container, Col, Row} from 'react-bootstrap'

const navItems = [
  {
    id: 1,
    link: 'clients',
    text: 'Clients',
  },
  {
    id: 2,
    link: 'social',
    text: 'Social Media',
  },
  {
    id: 3,
    link: 'contact',
    text: 'Contact Me',
  },
  {
    id: 4,
    link: 'skills',
    text: 'Skills',
  },
]

const getNavbarItems = navItems.map(props => {
  return (
    <Nav.Item
      className="d-flex pr-4 align-items-center justify-content-center text-uppercase"
      key={props.id}
    >
      <Link to={props.link}>
        <Nav.Link key={props.id} href={props.link}>
          {props.text}
        </Nav.Link>
      </Link>
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
        <Container>
          <Row className="position-relative w-100">
            <Col className="d-none d-lg-flex">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse
                className="justify-content-center"
                id="responsive-navbar-nav"
              >
                <Nav>{getNavbarItems}</Nav>
              </Navbar.Collapse>
            </Col>
          </Row>
        </Container>
      </Navbar>
    )
  }
}

export default Navigation
