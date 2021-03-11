import React, { Component } from 'react';

class Car extends Component {
  render() {
    const {
      _id,
      year,
      make,
      model,
      description,
      loggedInStatus,
      secure_url
    } = this.props;

    const backgroundBlock = {
      backgroundImage: 'url(' + secure_url + ')',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '100%'
    };

    return (
      <div className="single-car row">
        <div className="left-side col-4 col-6">
          <div className="vehicle-image" style={backgroundBlock}></div>
        </div>
        <div className="right-side container col-4 col-4">
          {loggedInStatus === true ? (
            <div className='card-icons'>
              <a
                onClick={() => {
                  this.props.removeCards(_id);
                }}
                className="remove-icon"
              >
                <i className="delete-icon fas fa-trash-alt"></i>
              </a>
            </div>
          ) : null}
          <h2 className="vehicle-model text-center">{model}</h2>
          <div className="divider text-center"></div>
          <h6 className="make text-center">{make}</h6>
          <p className="year text-center">{year}</p>
          <p className="description text-center">{description}</p>
        </div>
      </div>
    );
  }
}

export default Car;
