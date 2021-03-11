import {
  GETTING_COLLECTION,
  REMOVE_VEHICLE_CARD,
  INCREASE_BY_ONE,
} from '../actions/types';

//REDUCER FOR CAR COLLECTION / COLLECTION

const INITIAL_STATE = {
  car_collection: [],
  total_pages: 0,
  current_page: 0,
  isLoading: true, 
  msg: ' '
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GETTING_COLLECTION:
      return {
        ...state,
        car_collection: action.car_collection,
        current_page: action.current_page + 1,
        total_pages: action.total_pages,
        isLoading: false
      };

    case INCREASE_BY_ONE:
      return {
        ...state,
        current_page: parseInt(action.current_page) + 1,
        car_collection: state.car_collection.concat(action.car_collection),
        isLoading: false
      };

    case REMOVE_VEHICLE_CARD:
      return {
        ...state,
        msg: action.msg,
        car_collection: state.car_collection.filter((cars) => {
          return cars._id !== action.payload
        })
      };
    default:
      return state;
  }
}
