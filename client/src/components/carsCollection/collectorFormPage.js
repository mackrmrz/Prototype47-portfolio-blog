import React, { Component } from 'react'
import CarsForm from './collectorForm';
// import Images from '../UploadedImages/imageSubmit';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class CollectorFormPage extends Component {
    

    

    render() {
        return (
            <div>
                <CarsForm />
            </div>
        )
    }
}


CollectorFormPage = connect(null, actions)(CollectorFormPage);
export default CollectorFormPage;