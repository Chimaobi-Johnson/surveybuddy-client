import axios from 'axios';
import * as actionTypes from './actionTypes';

export const fetchUserSuccess = response => {
  return {
    type: actionTypes.FETCH_USER_SUCCESS,
    user: response.data
  }
}

export const fetchUserFail = error => {
  return {
    type: actionTypes.FETCH_USER_FAIL,
    error: true
  }
}

export const fetchUser = () => {
  return dispatch => {
		axios.get('/api/current_user')
		.then(response => {
			console.log(response);
			dispatch(fetchUserSuccess(response))
		})
		.catch(err => {
			console.log(err);
			dispatch(fetchUserFail(err));
		})
	}
}
