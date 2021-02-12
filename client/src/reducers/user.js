import { 
    USER_LOADED,
    USER_LOADING,
    AUTH_ERR,
    LOGIN_FAIL,
    LOGIN_SUCCESSFUL,
    LOGOUT_SUCCESSFUL
 } from '../actions/types';


const INITIAL_STATE = {
    auth: null,
    user: null,
    token: localStorage.getItem('token'),
    isValidated: null,
    isLoading: false,
    message: null
}


export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case USER_LOADED:
            console.log(action.payload);
            const user  = action.payload;
            return{
                ...state,
                isValidated: false,
                isLoading: false,
                user
            }
        case LOGIN_SUCCESSFUL:
            console.log( "LoggedIN", action.payload);
            localStorage.setItem(JSON.stringify('token'), action.payload.token);
            return{
                ...state,
                ...action.payload,
                isValidated: true,
                isLoading: false,
                message: ''
            }
        case AUTH_ERR:
        case LOGOUT_SUCCESSFUL:
        case LOGIN_FAIL:
            localStorage.removeItem("token");
            return{
                ...state,
                isValidated: null,
                isLoading: false,
                user: null,
                token: null
            }
        default: 
            return state;
    }
}