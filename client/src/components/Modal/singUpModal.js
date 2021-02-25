import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import * as actions from "../../actions";
import ReactModal from 'react-modal';

import LoginForm from './loginForm';



ReactModal.setAppElement("#root")

class SignUpModal extends Component {

    modalSubmit = (credentials) => {
        console.log('This is the modal', credentials);
        this.props.loginUser(credentials);
        this.props.close();
    }

    render(){

    const customStyles = {
        content : {
          top: '50%',
          left: '50%',
          right: 'auto',
        //   bottom: 'auto',
        //   marginRight: '-50%',
          transform : 'translate(-50%, -50%)',
          width: "500px"
        },
        overlay: {
            backgroundColor: "rgba(143,66,143, 0.75)"
        },
        
      };

        const { modalState, escModal, } = this.props;
        return (
            <div className="sign-in-modal">
                <ReactModal 
                    onRequestClose={() => escModal()} 
                    isOpen={modalState}
                    style={customStyles}
                >
                    <LoginForm onSubmit={this.modalSubmit} onRequestClose={() => escModal()}/>
                </ReactModal>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { isLoading, user, msg } = state.user;
    // const { error } = state.errors;
    return {
        isLoading,
        user,
        msg
    }
}

export default withRouter(connect(mapStateToProps, actions)(SignUpModal));