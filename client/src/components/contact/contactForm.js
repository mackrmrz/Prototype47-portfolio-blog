import React, { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { reduxForm, Field } from "redux-form";

import { FormInput, TextArea, FormButton } from '../formHelper';
class ContactEmail extends Component {
    render(){

        const { handleSubmit } = this.props;
        return(
            <div className='contact-form container'>
                {/* we need a form */}
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            <Field 
                                // className="form-group"
                                type='name'
                                name='name'
                                title='Name'
                                placeholder='Name'
                                component={FormInput}
                            />

                            <Field
                                // className="form-group" 
                                type='email'
                                name='email'
                                title='Email'
                                placeholder="Email"
                                component={FormInput}
                            />
                        </Col>
                        <Col>
                            <Field 
                                type='text'
                                name='message'
                                title='Message'
                                placeholder='Message'
                                component={TextArea}
                            />
                            <Field 
                                type="submit"
                                name='email'
                                title="Send"
                                component={FormButton}
                            />
                        </Col>

                    </Row>
                </Form>
                
                {/* submit to nodemailer */}
            </div>
        )
    }
}


ContactEmail = reduxForm({
    form: 'ContactEmail'
})(ContactEmail);
export default ContactEmail;