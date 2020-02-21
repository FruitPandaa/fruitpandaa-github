import React from 'react'
import {Container, Col, Row, Form, Button} from 'react-bootstrap'

class Contact extends React.Component {
  render() {
    return (
      <Container className="px-0 contrast">
        <Row
          noGutters
          className="pt-2 pt-md-5 w-100 py-4 px-xl-0 position-relative"
        >
          <Col>
            <h3 className="text-uppercase">Contact Form</h3>
          </Col>
        </Row>
        <Row
          noGutters
          className="pt-2 w-100 py-4 px-xl-0 position-relative"
        >
          <Col className="w-100">
            <Form className="contact col-md-12 d-flex flex-row flex-wrap justify-content-center w-100">
              <Form.Group
                className="contact-group col-md-6"
                controlId="formBasicEmail"
              >
                <Form.Control
                  type="email"
                  placeholder="Email *"
                  className="contact-input"
                />
              </Form.Group>
              <Form.Group
                className="contact-group col-md-6"
                controlId="formBasicName"
              >
                <Form.Control
                  className="contact-input"
                  type="name"
                  placeholder="Full Name *"
                />
              </Form.Group>
              <Form.Group
                className="contact-group col-md-6"
                controlId="formBasicPhone"
              >
                <Form.Control
                  type="phone"
                  placeholder="Phone *"
                  className="contact-input"
                />
              </Form.Group>
              <Form.Group
                className="contact-group col-md-6"
                controlId="formBasicSubject"
              >
                <Form.Control
                  className="contact-input"
                  type="subject"
                  placeholder="Subject *"
                />
              </Form.Group>
              <Form.Group
                className="contact-group col-md-12"
                controlId="formBasicMessage"
              >
                <Form.Control
                  className="contact-input contact-message"
                  type="message"
                  placeholder="Message *"
                />
              </Form.Group>
              <Form.Group
                className="contact-group contact-captcha hidden"
                controlId="formBasicCheckbox"
              >
                <Form.Check
                  type="checkbox"
                  label="placeholder CAPTCHA"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Contact
