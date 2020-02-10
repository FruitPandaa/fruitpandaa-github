import React from 'react'
import {Carousel, Container, Col, Row} from 'react-bootstrap'
import logo from './logo.svg'

class Hero extends React.Component {
  render() {
    return (
      <Container className="px-0">
        <Row
          noGutters
          className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative"
        >
          <Col
            xs={{order: 2}}
            md={{size: 4, order: 1}}
            tag="aside"
            className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0 d-flex flex-row justify-content-center align-items-center"
          >
            <h2 className="">aleksander.klebek</h2>
          </Col>
          <Col
            xs={{order: 1}}
            md={{size: 7, offset: 1}}
            tag="section"
            className="py-5 mb-5 py-md-0 mb-md-0"
          >
            <Carousel>
              <Carousel.Item>
                <img className="w100" src={logo} alt="PLACEHOLDER" />
                <Carousel.Caption>
                  <h3>First header</h3>
                  <p>Lorem ipsum dolor Lorem ipsum dolor</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="w100" src={logo} alt="PLACEHOLDER" />
                <Carousel.Caption>
                  <h3>First header</h3>
                  <p>Lorem ipsum dolor Lorem ipsum dolor</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Hero
