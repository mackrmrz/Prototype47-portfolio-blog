import { SEND_EMAIL } from "./types";

import axios from 'axios';

export const sendEmail = (field) => dispatch => {
    const config = {
        header: {
            'Content-Type': 'application/json'
        }
    }

    // const body = JSON.stringify({ name, email, message});

    axios.post("contact/send", field, config)
            .then(res => dispatch({
                type: SEND_EMAIL,
                payload: res.data
            }))
            .catch(err => console.log("error", err));
}