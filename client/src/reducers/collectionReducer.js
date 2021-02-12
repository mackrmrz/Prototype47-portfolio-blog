import { 
    GETTING_COLLECTION, 
    POSTING_COLLECTION,
    FETCH_IMAGE,
    UPLOAD_IMAGE, 
    REMOVE_VEHICLE_CARD
} from "../actions/types";

const INITIAL_STATE = {
    car_collection: []
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case GETTING_COLLECTION:
            return{
                ...state,
                car_collection: action.payload
            }

        case POSTING_COLLECTION:
            console.log("post payload", action.payload);
            return{
                ...state,
                
            }
        case REMOVE_VEHICLE_CARD:
            console.log("REMOVING VEHICLE CARD", action.payload);
            let deletedCar = state.car_collection.filter((cars) => {
                return cars.id !== action.payload
            });
            return {
                ...state,
                car_collection: deletedCar
            }
        case FETCH_IMAGE: 
            console.log("Getting Images", action.payload);
            return {
                ...state,
                images: action.payload
            }
        default: return state;
    }
}

