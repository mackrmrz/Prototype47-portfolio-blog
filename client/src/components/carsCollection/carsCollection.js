import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import * as actions from "../../actions";

import { Link } from "react-router-dom";

import Car from "./singleCar";
import CarsForm from './collectorForm';

class CarsCollector extends Component {
  authLinks(route, title) {
    return <Link to={route}> {title} </Link>;
  }

  componentDidMount() {
    this.props.getCarCollection();
  }

  componentDidUpdate(_id){
    this.props.getCarCollection();
  }


  deleteCard(_id) {
    console.log("Collection method requesting id", _id);
    this.props.deleteCardById(_id);
    // create function in actions
  }

  render() {
    return (
      <Container className="cars-collection">
        <h1>Lambo Collection</h1>
        {this.props.car_collection.map((car, index) => {
          return <Car key={index} {...car} removeCards={(_id) => {this.deleteCard(_id)}} loggedInStatus={this.props.isValidated} />;
        })}
      </Container>
    );
  }
}

function mapStateToProps(state) {
  const { car_collection } = state.car_collection;
  const { isValidated } = state.user;
  return {
    car_collection,
    isValidated
  };
}
CarsCollector = connect(mapStateToProps, actions)(CarsCollector);
export default CarsCollector;
