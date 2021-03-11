import { GETTING_COLLECTION, REMOVE_VEHICLE_CARD, INCREASE_BY_ONE, ERROR_MSG } from './types';

import axios from 'axios';

export function getCarCollection() {
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


export const increaseByOne = (counting) =>{
    
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


// UPDATING CARD

// REMOVING CARD BY ID
export const deleteCardById = (_id) => {
    const token = localStorage.getItem(JSON.stringify('token'));
    const config = {
        headers: {
            // 'Accept': 'application/json',
            'Authorization': 'Bearer' + ' ' + `${token}`
          }
    }
    return (dispatch) => {
        axios.delete(`car-collection/delete-one/${_id}`, config)
            .then( res => {
                dispatch({
                    type: REMOVE_VEHICLE_CARD,
                    payload: _id,
                    msg: res.data.msg
                })
            })
            .catch( (error) => {
                dispatch({
                    type: ERROR_MSG,
                    payload: error.response ? error.response.data : 'No Connection'
                })
            })
    }
}