import { GETTING_COLLECTION, REMOVE_VEHICLE_CARD, INCREASE_BY_ONE } from './types';

import axios from 'axios';

export function getCarCollection() {
    console.log("looking for state");
    return function(dispatch) {
        axios.get(`car-collection`)
            .then(res => {
                dispatch({
                    type: GETTING_COLLECTION,
                    car_collection: res.data.cars,
                    current_page: res.data.meta.current_page,
                    total_pages: res.data.meta.total_pages 
                })
            })
    }
}


export const increaseByOne = (counting) => {
    return (dispatch) => {
        axios.get(`car-collection?page=${counting}`)
            .then(res => {
                dispatch({
                    type: INCREASE_BY_ONE,
                    car_collection: res.data.cars,
                    current_page: res.data.meta.current_page
                })
            })
    }
       
}

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