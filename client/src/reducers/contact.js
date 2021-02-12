import {
    SEND_EMAIL
} from '../actions/types';


const INITIAL_STATE ={
    name: '',
    email: '',
    message: ''
}

export default function(state = INITIAL_STATE, action){
    switch(action.payload) {
        case SEND_EMAIL:
            console.log("Payload", action.payload)
            return{
                ...state,
            }
    }
}