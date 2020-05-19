import toggleReadActions from './types';
import axios from 'axios';

export const toggleReadSucces = read => {
  return {
    type: toggleReadActions.TOGGLE_READ_SUCCESS,
    payload: read
  };
};

export const toggleReadFailure = error => ({
  type: toggleReadActions.TOGGLE_READ_FAILURE,
  payload: error
});

export const startToggleRead = (id, read) => {
  return async dispatch => {
    try {
      const url = `${process.env.REACT_APP_MESSANGER_BACKEND}/toggle/${id}/${read}`;

      const axiosInstance = await axios.create({
        baseURL: url,
        headers: {
          'Content-Type': `application/json`,
          'Access-Control-Allow-Origin': '*'
        }
      });

      const readUpdated = await axiosInstance({
        method: 'PATCH',
        read: read
      });

      dispatch(toggleReadSucces(readUpdated));
    } catch (err) {
      console.log(err);
      dispatch(toggleReadFailure(err));
    }
  };
};
