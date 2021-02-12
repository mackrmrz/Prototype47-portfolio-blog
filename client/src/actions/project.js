import { GET_PROJECTS } from './types';

import axios from 'axios';


export default function getProjects() {
    return function(dispatch) {
        axios.get("portfolio-items")
            .then(res => {
                dispatch({
                    type: GET_PROJECTS,
                    payload: res.data
                })
            })
    }
}