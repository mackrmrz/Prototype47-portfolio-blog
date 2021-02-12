import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

//IMPORT STATE
import user from './user';
import projects from './projectReducer';
import car_collection from './collectionReducer';
import errors from './errorMsg'

const rootReducer = combineReducers({
    form,
    user,
    projects,
    car_collection,
    errors
})

export default rootReducer;