import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import { Link } from 'react-router-dom';

import Car from './singleCar';
import CarsForm from './collectorForm';

class CarsCollector extends Component {
  constructor() {
    super();

    this.initiatingScroll();
  }

  // ADDED PAGINATED API AND INFINITE SCROLL FEATURE
  initiatingScroll() {
    window.onscroll = () => {
      if (
        // this.props.isLoading ||
        parseInt(this.props.current_page) === this.props.total_pages +1
      ) {
        return;
      }
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        this.props.increaseByOne(this.props.current_page);
      }
    };
  }

  authLinks(route, title) {
    return <Link to={route}> {title} </Link>;
  }

  componentDidMount() {
    this.props.getCarCollection();
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('NEXT STATE', prevState, prevProps);
    if (prevProps.car_collection._id !== this.props.car_collection._id) {
      return true;
    }
    return false;
  }


  deleteCard(_id) {
    this.props.deleteCardById(_id);
  }

  render() {
    
    return (
      <div className="cars-collection container">
        <h1 className="header">Lambo Collection</h1>
        <div className=" container ">
          {this.props.car_collection.map((car, index) => {
            return (
              <Car
                key={index}
                {...car}
                removeCards={(_id) => {
                  this.deleteCard(_id);
                }}
                loggedInStatus={this.props.isValidated}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {
    car_collection,
    total_pages,
    current_page,
    isLoading
  } = state.car_collection;
  const { isValidated } = state.user;
  return {
    car_collection,
    total_pages,
    current_page,
    isLoading,
    isValidated
  };
}
CarsCollector = connect(mapStateToProps, actions)(CarsCollector);
export default CarsCollector;
