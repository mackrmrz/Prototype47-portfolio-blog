import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import { Button, Form, Col, Row, Alert } from 'react-bootstrap';

class EmailForm extends Component {
  handleEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_3b9cy2l',
        // process.env.EMAIL_SERVICE_ID,
        'template_cov4jk1',
        e.target,
        'user_1Vwx0fA1jvJOjhR0rCOPi'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  render() {
    return (
      <div className="container email-form">
        <form className="form" onSubmit={this.handleEmail}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Name"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Subject</Form.Label>
            <Form.Control
              type="text"
              name="subject"
              placeholder="Subject"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Contact Me</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              name="message"
              rows="8"
              placeholder="How can I help?"
            ></Form.Control>
          </Form.Group>
          <Button type="submit" value="Send Message">
            {' '}
            Send Message{' '}
          </Button>
        </form>
      </div>
    );
  }
}

export default EmailForm;
