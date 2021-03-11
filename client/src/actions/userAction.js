import axios from 'axios';

import { errorMsg } from './errorMsg';

import {
  USER_LOADED,
  USER_LOADING,
  LOGIN_FAIL,
  LOGIN_SUCCESSFUL,
  AUTH_ERR,
  LOGOUT_SUCCESSFUL
} from './types';

export const userLoad = () => (dispatch, fromState) => {
  dispatch({ type: USER_LOADING });
  axios
    .get('username', tokenFig(fromState))
    .then((res) =>
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    )
    .catch((err) => {
      console.log('UserLoad', err);
      dispatch(errorMsg( err.res.data, err.res.status));
      dispatch({
        type: AUTH_ERR
      });
    });
};

//LOGIN USER
export const loginUser = ({ email, password }) => (dispatch) => {
  //header
  const config = {
    headers: {
      'Content-Type' : 'application/json',
    }
  };

  //Request body
  const body = JSON.stringify({ email, password });
  
  axios
    .post('username/sign-in', body, config)
    // console.log("action call", res.data);
    .then((res) =>
      dispatch({
        type: LOGIN_SUCCESSFUL,
        payload: res.data
      })
    )
    .catch((err) => {
      dispatch({
        type: LOGIN_FAIL,
        msg: err.response ? err.response.data : "LOGIN FAILED"
      });
    });
};

export const logout = () => {
  return {
    type: LOGOUT_SUCCESSFUL
  };
};

//CONFIG HEADERS
export const tokenFig = (fromState) => {
  const loggedIn = fromState.auth;
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  };

  if (loggedIn) {
    config.headers['x-auth-token'] = loggedIn;
  }

  return config;
};
