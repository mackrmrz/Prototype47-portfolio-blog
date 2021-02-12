import { GETTING_COLLECTION, POSTING_COLLECTION, REMOVE_VEHICLE_CARD } from './types';


import axios from 'axios';


export function getCarCollection() {
    return function(dispatch) {
        axios.get("car-collection")
            .then(res => {
                dispatch({
                    type: GETTING_COLLECTION,
                    payload: res.data
                })
            })
    }
}



// ADD ACTIONS FOR POST FUNCTIONALITY
// export const createCollection = ({ make, model, year, description, vehicle_image }) => dispatch => {
    
//     const body = JSON.stringify({ make, model, year, description, vehicle_image });

//     axios.post('car-collection/car-sampler', body)
//         .then(res => dispatch({
//             type: POSTING_COLLECTION,
//             payload: res.data
//         }))
//         .catch(err => console.log("Error", err));
// }

// REMOVING CARD BY ID
export const deleteCardById = (_id) => {
    console.log("Id in Actions", _id);
    return (dispatch) => {
        axios.delete(`car-collection/delete-one/:${_id}`)
            .then( res => {
                dispatch({
                    type: REMOVE_VEHICLE_CARD,
                    payload: _id
                })
            })
            .catch( error => console.log("ERROR", error))
    }
}