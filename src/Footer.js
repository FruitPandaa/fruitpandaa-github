import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'

class Footer extends React.Component {
  render() {
    return (
      <Container className="px-0">
        <Row
          noGutters
          className="py-5 w-100 px-4 px-xl-0 position-relative"
        >
          <Col className="d-flex flex-row flex-wrap justify-content-center w-100">
            <p>aleksander.klebek ||| © Copyright 2020</p>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Footer
