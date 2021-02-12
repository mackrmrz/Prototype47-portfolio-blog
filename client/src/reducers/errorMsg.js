import { 
    ERROR_MSG,
    REMOVE_ERROR
} from '../actions/types';


const INITIALSTATE = {
    msg: {},
    id: null
}

export default function(state = INITIALSTATE, action){
    switch(action.type){
        case ERROR_MSG:
            return{
                msg: action.payload.msg,
                id: action.payload.id
            }
        case REMOVE_ERROR:
            return {
                msg: {},
                status: null,
                id: null
            }
        default: return state;
    }
}