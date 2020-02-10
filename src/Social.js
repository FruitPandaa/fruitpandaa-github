import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'
import logo from './logo.svg'

class Social extends React.Component {
  render() {
    return (
      <Container className="px-0">
        <Row
          noGutters
          className="py-5 w-100 px-4 px-xl-0 position-relative"
        >
          <Col className="d-flex flex-row flex-wrap justify-content-center w-100">
            <h3>Find me on:</h3>
            <img className="col-md-1" src={logo} alt="github" />
            <img className="col-md-1" src={logo} alt="gmail" />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Social
