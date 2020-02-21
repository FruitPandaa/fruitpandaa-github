import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'
import githubLogo from './GitHub.svg'
import gmailLogo from './Gmail.svg'

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
            <a
              className="col-md-2 lime"
              href="https://fruitpandaa.github.io"
            >
              <img
                className="col-md-12"
                src={githubLogo}
                alt="github"
              />
              github
            </a>
            <a
              className="col-md-2 lime"
              href="mailto:aleksander.klebek@gmail.com"
            >
              <img
                className="col-md-12"
                src={gmailLogo}
                alt="gmail"
              />
              gmail
            </a>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Social
