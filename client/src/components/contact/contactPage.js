import React, { Component } from 'react';
import EmailForm from './contactEmail';


class ContactPage extends Component {
  render(){
    return (
      <div className="contact-me container">
        <div className="header">
          <h2 className='title'>Contact Me</h2>
          <p>I dream of having a Lamborghini one day</p>
        </div>
        <div className="jumbotron">
          <div className="row">
            <div className="image-side-static col">
              <img className="img-fluid" src="/images/profile/contactPage.jpg" alt= 'here' />
            </div>
  
            <div className="description col-md-6 card-body">
                <div className='contact-info-icon'>
                    <h3>Hit me up!</h3>
                    <ul className='contact-link-list list-group'>
                        <li className="contact-link list-group-item">
                            <div className='md-v-line items'><i className=" fab fa-twitter"></i><h5>@Prototype47</h5></div>
                        </li>
                        <li className="contact-link list-group-item">
                          <div className='md-v-line items'><i className="fab fa-instagram"></i><h5>Prototype47</h5></div>
                        </li>
                        <li className="contact-link list-group-item ">
                          <div className='md-v-line items'><i className="fab fa-youtube"></i><h5>Prototype47</h5></div>
                        </li>
                    </ul>
                </div>

            </div>
          </div>
        </div>
        <EmailForm/>
      </div>
    );
  }
};
export default ContactPage;