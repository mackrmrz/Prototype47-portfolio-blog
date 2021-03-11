import { ERROR_MSG, GET_PROJECTS } from "../actions/types";

const INITIAL_STATE = {
    projects: [],
    error_msg: ''
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case GET_PROJECTS:
            return{
                ...state,
                projects: action.payload.response
            }
        case ERROR_MSG:
            return{
                ...state,
                error_msg: action.payload
            }
        default: return state;
    }
}
