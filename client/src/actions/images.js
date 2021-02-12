import { FETCH_IMAGE, POSTING_COLLECTION, UPLOAD_IMAGE } from './types';

import axios from 'axios';

export  function postImages(imageData) {
    return function(dispatch) {
        axios.post("http://localhost:5500/car-collection/car-sampler", imageData )
            .then(res => dispatch({
                types: UPLOAD_IMAGE,
                payload: res.data
            }))
    }
}


export const getImages = () => dispatch => {
    axios.get("http://localhost:5500/car-collection")
        .then(res => dispatch({
            type: FETCH_IMAGE,
            payload: res.data
        }))
        .catch(err => console.log("IMage GET  ERROR", err))
}
