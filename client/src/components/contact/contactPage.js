import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../../actions";

import ContactEmail from "./contactForm";


class ContactPage extends Component {

    onSubmit = (fields) => {
        console.log("Contact form", fields);
        // this.props.sendEmail(fields);
    }


    render(){
        return(
            <div className='contact-page'>
                <ContactEmail onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

export default connect(null, actions)(ContactPage);