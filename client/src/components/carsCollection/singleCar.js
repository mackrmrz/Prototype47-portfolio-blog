import React, { Component } from "react";
import { Container, Jumbotron, Col, Row } from 'react-bootstrap';

class Car extends Component{
    render(){
        const { _id, year, make, model, description, loggedInStatus, secure_url } = this.props;
        const backgroundBlock = {
            backgroundImage: `url(${secure_url})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center"
        };
        return (
            <Container className="single-car">
                  {loggedInStatus === true ? (
                   <a onClick={() => {this.props.removeCards(`{${_id}}`)}} className='remove-icon'><i className="far fa-times-circle"></i></a>
                ) : (
              <div className="nav-brand brand">Lambo</div>
            )}
                {/* <a onClick={() => {this.props.removeCards(`{${_id}}`)}} className='remove-icon'><i className="far fa-times-circle"></i></a> */}
                <Col md={6} className="right-side">
                    <img className="vehicle-image" src={`${secure_url}`}/>
                </Col>
                <Col md={6} className="left-side">
                    <h2 className="vehicle-model">
                        {model}
                    </h2>
                    <h4>{year, make}</h4>
                    <p>
                        {description}
                    </p>
                </Col>
            </Container>
        )
    }
}

export default Car;