import { TOGGLE_MODAL } from "../actions/types";

const INITIAL_STATE = {
    toggleModal = false
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case TOGGLE_MODAL:
            console.log(action.payload);
            return{
                ...state,
                projects: action.payload
            }
        default: return state;
    }
}