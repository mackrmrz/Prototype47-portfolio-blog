import React, { Component } from 'react';
import { Button, Form, Col, Row, Alert } from 'react-bootstrap';
import axios from 'axios';
import DropzoneComponent from 'react-dropzone-component';

import '../../../node_modules/dropzone/dist/min/dropzone.min.css';
import '../../../node_modules/react-dropzone-component/styles/filepicker.css';

class CarsForm extends Component {
  constructor() {
    super();

    this.state = {
      make: '',
      model: '',
      year: '',
      description: '',
      vehicle_image: null,
      secure_url: '',
      msg: '',
      car: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.carFormSubmit = this.carFormSubmit.bind(this);
    this.createForm = this.createForm.bind(this);
    this.uploadfile = this.uploadfile.bind(this);

    this.vehicle_image = React.createRef();
  }

  uploadfile() {
    return {
      addedfile: (file) => this.setState({ vehicle_image: file })
    };
  }

  componentConfig() {
    return {
      iconFiletypes: ['.jpg', '.png', '.jpeg'],
      showFiletypeIcon: true,
      postUrl: 'https://httpbin.org/post'
    };
  }

  djsConfig() {
    return {
      addRemoveLinks: true,
      maxFiles: 1
    };
  }

  createForm() {
    var formData = new FormData();
    formData.append('make', this.state.make);
    formData.append('model', this.state.model);
    formData.append('year', this.state.year);
    formData.append('description', this.state.description);
    if (this.state.vehicle_image) {
      formData.append('vehicle_image', this.state.vehicle_image);
    }

    return formData;
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  //API SUBMIT
  carFormSubmit(field) {
    const token = localStorage.getItem(JSON.stringify('token'));
   
    axios({
      method: 'POST',
      url: 'car-collection/adding-to-cloudinary',
      data: this.createForm(),
      headers: {
        'Content-Type': 'multipart/form-data',
        'Accept': 'application/json',
        'Authorization': 'Bearer' + ' ' + `${token}`
      }
    })
      .then((res) => {
        this.setState({
          make: '',
          model: '',
          year: '',
          description: '',
          msg: res.data.msg,
          car: res.data.car
        });
        this.vehicle_image.current.dropzone.removeAllFiles();
        // () => this.props.history.push("/");//CHECK BACK AGFTER PUSHING 
      })
      .catch((err) => {
        this.setState({
          msg: `${err}`
        })
      });
    field.preventDefault();
  }

  render() {
    return (
      <div className="car-collection-form ">
        <form onSubmit={this.carFormSubmit} className="form-wrapper form">
          <Row className="Form.Control-wrapper">
            <Col>
              <Form.Label>
                <h2>Make</h2>
              </Form.Label>
              <Form.Control
                className="collection-form__Form.Control form-controller"
                type="text"
                name="make"
                placeholder="Make"
                value={this.state.make}
                onChange={this.handleChange}
              />
              <Form.Label>
                <h2>Model</h2>
              </Form.Label>
              <Form.Control
                className="collection-form__Form.Control form-controller"
                type="text"
                name="model"
                placeholder="Model"
                value={this.state.model}
                onChange={this.handleChange}
              />
            </Col>
            <Col>
              <Form.Label>
                <h2>Year</h2>
              </Form.Label>
              <Form.Control
                className="collection-form__Form.Control form-controller"
                type="text"
                name="year"
                placeholder="Year"
                value={this.state.year}
                onChange={this.handleChange}
              />
            </Col>
          </Row>
          <Form.Row>
            <Col>
              <Form.Label>
                <h2>Description</h2>
              </Form.Label>
              <Form.Control
                as="textarea"
                className="collection-form__Form.Control form-controller"
                type="text"
                name="description"
                placeholder="Description"
                value={this.state.description}
                onChange={this.handleChange}
              />

              <DropzoneComponent
                ref={this.vehicle_image}
                config={this.componentConfig()}
                djsConfig={this.djsConfig()}
                eventHandlers={this.uploadfile()}
              />
            </Col>
          </Form.Row>
          <div className="car-collection-form__button col-12 text-center">
            <Button type="submit">Submit</Button>
          </div>
        </form>

        <div className="uploadShowing">
          <Alert varient="success">
            <h2>{this.state.msg}</h2>
          </Alert>
        </div>
      </div>
    );
  }
}

export default CarsForm;
