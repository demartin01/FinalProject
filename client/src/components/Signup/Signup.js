import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import API from "../../utils/API";

class Signup extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      validated: false,
      username: "",
      email: "",
      password: "",
      confirm: ""
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  };

  handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({ 
        [name]:value
      })
  }

  handleValidation(event) {

    if(this.state.password !== this.state.confirm) {
      event.preventDefault();
      return alert("password does not match!");
    };
    
    console.log({
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    });

    API.handleCreateUser({
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    });

    // const form = event.current.target;
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // };

    this.setState({validated: true})
  };

  render() {
    const { validated } = this.state;
    return (
      <>
        <Button variant="info" onClick={this.handleShow}>
          Sign Up
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>
            <Form 
              validated={validated} 
              onSubmit={event => this.handleValidation(event)}
            >
          <Modal.Body>

              <Form.Group controlId="formBasicName">
                <Form.Label>Full name</Form.Label>
                <Form.Control 
                  required
                  name="username"
                  type="text" 
                  placeholder="Full name"
                  onChange={this.handleInputChange} 
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                  required
                  name="email"
                  type="email" 
                  placeholder="Enter email"
                  onChange={this.handleInputChange} 
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                  required
                  name="password"
                  type="password" 
                  placeholder="password" 
                  onChange={this.handleInputChange}
                  />
                <Form.Label>Confirm</Form.Label>
                <Form.Control 
                  required
                  name="confirm"
                  type="password" 
                  placeholder="Confirm" 
                  onChange={this.handleInputChange}
                />
              </Form.Group>

          </Modal.Body>
          <Modal.Footer>

            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Submit
            </Button>

          </Modal.Footer>
            </Form>
        </Modal>
      </>
    );
  }
}

export default Signup;