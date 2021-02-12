import React, { Component } from 'react';
import { Form, Col, Row, Button } from "react-bootstrap";


export class FormInput extends Component{
    render(){
        const { className, title, type, placeholder, input, value } = this.props;
        return(
            <Form.Group className='form-helper'>
                <Form.Label 
                    size="sm"
                    className='form-input__label'>
                    {title}
                </Form.Label>
                <Form.Control 
                    size="sm"
                    className={`${className}`} 
                    type={type} 
                    placeholder={placeholder}
                    {...input}
                    value={value}
                />
            </Form.Group>
        )
    }
}

export class FormButton extends Component {
    render(){
        const { type, title, input } = this.props;
        return(
            <div className='form-button'>
                <Button
                    className='button-submit' 
                    type={type}
                    {...input}>
                        {title}
                </Button>
            </div>
        )
    }
}


export class TextArea extends Component {
    render(){
        const { type, placeholder, title, input, value} = this.props;
        return(
            <Form.Group className='email-text'>
                <Form.Label>{title}</Form.Label>
                <Form.Control as="textarea" type={type} placeholder={placeholder} {...input} {...value}/>
            </Form.Group>
        )
    }
}


// export class FileUploader extends Component{
   

//     onChange(e) {
//         console.log('File Field Change', e.target.files[0]);
//     }
//     render(){
//         const { className, title, type, placeholder, input, value } = this.props;
//         return(
//             <div className='form-helper'>
//                 <Form.Label className='form-input__label'>
//                     {title}
//                 </Form.Label>
//                 <Form.File
//                     as="file" 
//                     className={`${className}`} 
//                     type={type} 
//                     placeholder={placeholder}
//                     {...input}
//                     value={value}
//                 />
//             </div>
//         )
//     }
// }
