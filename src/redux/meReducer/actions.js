import getMeActions from './types';
import axios from 'axios';
const url = process.env.REACT_APP_PYT_BACKEND;

export const startFetchMe = () => ({
  type: getMeActions.START_FETCH_ME
});

export const fetchSuccess = email => ({
  type: getMeActions.FETCH_ME_SUCCESS,
  payload: email
});

export const fetchFailure = error => ({
  type: getMeActions.FETCH_ME_FAILURE,
  payload: error
});

export const fetchMe = token => {
  return async dispatch => {
    try {
      const urlMe = `${url}/api/v1/users/me`;
      dispatch(startFetchMe());

      const axiosInstance = await axios.create({
        baseURL: urlMe,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      const result = await axiosInstance({
        method: 'GET'
      });

      dispatch(fetchSuccess(result.data.data.data.email));
    } catch (err) {
      console.log(err);
      dispatch(fetchFailure(err));
    }
  };
};
