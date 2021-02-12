import React, { Component } from "react";
import { Button, Form, Col, Row } from 'react-bootstrap';
import axios from 'axios';
import DropzoneComponent from 'react-dropzone-component';

import '../../../node_modules/dropzone/dist/min/dropzone.min.css';
import '../../../node_modules/react-dropzone-component/styles/filepicker.css';


class CarsForm extends Component {
    constructor(){
        super();

        this.state = {
            make: "",
            model: "",
            year: "",
            description: "",
            vehicle_image: "",
            secure_url: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.carFormSubmit = this.carFormSubmit.bind(this);
        this.createForm = this.createForm.bind(this);
        this.uploadfile = this.uploadfile.bind(this);
    }

    uploadfile() {
        return{
            addedfile: file => this.setState({ vehicle_image: file })
        }
    }
    
    componentConfig() {
        return {
            iconFiletypes: [".jpg", ".png", ".jpeg"],
            showFiletypeIcon: true,
            postUrl: "https://httpbin.org/post"
        }
    }
    
    djsConfig(){
        return{
            removeLinks: true,
            maxFiles: 1
        }
    }
    
    createForm(){
        var formData = new FormData();
        formData.append("make", this.state.make);
        formData.append("model", this.state.model);
        formData.append("year", this.state.year);
        formData.append("description", this.state.description);
        if (this.state.vehicle_image) {
            formData.append("vehicle_image", this.state.vehicle_image);
        }
        debugger;
        // return formData;
    }
    
    handleChange(event){
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        });
    }

   
//API SUBMIT 
    carFormSubmit(event){
        console.log(event);
        this.createForm();
        // const config = { 
        //     headers: {
        //         'Content-Type': 'multipart/form-data' 
        //     }
        // }

        // axios({
        //     method: "POST",
        //     url: "car-collection/adding-to-cloudinary",
        //     // data: this.createForm()
        // })
        // .then(res => {
        //     console.log("response from post", res.data);
        // })
        // .catch(err =>{
        //     console.log("error from form post", err);
        // })
        event.preventDefault();
    }

    // encType="mulipart/form-data"
    render(){
        return(
            <div className="car-collection-form ">
                <form encType="multipart/form-data" onSubmit={this.carFormSubmit} className='form-wrapper form'>
                    <Row className='Form.Control-wrapper'>
                        <Col>
                            <Form.Label><h2>Make</h2></Form.Label>
                            <Form.Control 
                                className='collection-form__Form.Control form-controller'
                                type='text'
                                name='make'
                                placeholder='Make'
                                value={this.state.make}
                                onChange={this.handleChange}
                            />
                            <Form.Label><h2>Model</h2></Form.Label>
                            <Form.Control 
                                className='collection-form__Form.Control form-controller'
                                type='text'
                                name='model'
                                placeholder='Model'
                                value={this.state.modal}
                                onChange={this.handleChange}
                            />
                        </Col>
                        <Col>
                            <Form.Label><h2>Year</h2></Form.Label>
                            <Form.Control 
                                className='collection-form__Form.Control form-controller'
                                type='text'
                                name='year'
                                placeholder='Year'
                                value={this.state.year}
                                onChange={this.handleChange}
                            />
                        </Col>
                    </Row>
                        <Form.Row>
                            <Col>
                                <Form.Label><h2>Description</h2></Form.Label>
                                <Form.Control as="textarea"
                                    className='collection-form__Form.Control form-controller'
                                    type='text'
                                    name='description'
                                    placeholder='Description'
                                    value={this.state.description}
                                    onChange={this.handleChange}
                                />

                                <Form.Control
                                    type='file'
                                    name='vehicle_image'
                                    placeholder='Upload Image'
                                    value={this.state.vehicle_image}
                                    onChange={this.handleChange}
                                />
                                {/* <DropzoneComponent
                                    config={this.componentConfig()}
                                    djsConfig={this.djsConfig()}
                                    eventHandler={this.handleChange}
                                    name='vehicle_image'
                                /> */}
                            </Col>
                        </Form.Row>
                    <div className='car-collection-form__button col-12 text-center'>
                        <Button type='submit' >Submit</Button>
                    </div>
                </form>
            </div>
        )
    }
}



export default CarsForm;