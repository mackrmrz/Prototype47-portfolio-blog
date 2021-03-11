import React, { Component } from 'react'
import CarsForm from './collectorForm';

class CollectorFormPage extends Component {


    submittingCar(e) {
        console.log(e);
    }

    render() {
        return (
            <div>
                <CarsForm updateCar={this.submittingCar}/>
            </div>
        )
    }
}

export default CollectorFormPage;