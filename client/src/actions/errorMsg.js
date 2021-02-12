import { ERROR_MSG, REMOVE_ERROR } from './types';



export const errorMsg = (msg, id ) => {
    return {
        type: ERROR_MSG,
        payload: { msg }
    };
};


export const removeError = () => {
    return {
            type: REMOVE_ERROR
    };
};