import { GET_PROJECTS } from "../actions/types";

const INITIAL_STATE = {
    projects: []
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case GET_PROJECTS:
            console.log(action.payload);
            return{
                ...state,
                projects: action.payload
            }
        default: return state;
    }
}