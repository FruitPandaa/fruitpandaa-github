import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'
import Images from './Images'

class Clients extends React.Component {
  render() {
    return (
      <Container className="px-0 darkgray2">
        <Row
          noGutters
          className="py-5 w-100 px-4 px-xl-0 position-relative"
        >
          <Col className="client-images d-flex flex-row flex-wrap justify-content-center w-100">
            <h4 className="w-100">
              5 years of commercial programming experience working
              with many renowned companies, such as:
            </h4>
            <p className="pb-4 w-100">
              (<span className="lime">marked</span> entries have
              available project previews on click)
            </p>
            <Images />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Clients
