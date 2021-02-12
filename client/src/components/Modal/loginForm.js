import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import { FormInput, FormButton } from "../formHelper";
class LoginForm extends Component {
    render(){

        const { handleSubmit, escModal } = this.props;
        return(
            <div className='modal-login__form '>
                <form onSubmit={ handleSubmit } className="form">
                    <Field className='sign-in__email '
                        type='email'
                        name='email'
                        title='Email'
                        placeholder='Email'
                        component={FormInput}
                    />
                    <Field className='sign-in__password '
                        type='password'
                        name='password'
                        title='Password'
                        placeholder='Password'
                        component={FormInput}
                    />
                    <Field className='sign-in__button'
                        type='submit'
                        name='login'
                        title='Login'
                        onClick={escModal}
                        component={FormButton}
                    />
                </form>
            </div>
        )
    }
}

LoginForm = reduxForm({
    form: "LoginForm"
})(LoginForm);

export default LoginForm;