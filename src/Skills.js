import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'
import html5Logo from './HTML5.svg'
import css3Logo from './CSS3.svg'
import JSLogo from './JS.svg'
import reactLogo from './React.svg'

class Skills extends React.Component {
  render() {
    return (
      <Container className="px-0">
        <Row
          noGutters
          className="py-5 w-100 px-4 px-xl-0 position-relative"
        >
          <Col className="d-flex flex-row flex-wrap justify-content-center w-100">
            <img className="col-md-2" src={html5Logo} alt="HTML5" />
            <img className="col-md-2" src={css3Logo} alt="CSS3" />
            <img className="col-md-2" src={JSLogo} alt="JavaScript" />
            <img className="col-md-2" src={reactLogo} alt="React" />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Skills
