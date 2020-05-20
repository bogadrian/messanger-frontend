import setMessagesActions from './types';
import axios from 'axios';
const url = process.env.REACT_APP_MESSANGER_BACKEND;

export const startFetchMessagesByEmail = () => ({
  type: setMessagesActions.START_FETCH_BY_EMAIL
});

export const fetchMessagesSuccessByEmail = messages => {
  return {
    type: setMessagesActions.FETCH_BY_EMAIL_SUCCESS,
    payload: messages
  };
};
export const fetchMessagesFailureByEmail = error => {
  return { type: setMessagesActions.FETCH_BY_EMAIL_FAILURE, payload: error };
};

export const fetchMessagesByEmail = email => {
  return async dispatch => {
    try {
      dispatch(startFetchMessagesByEmail());
      const mes = await axios.get(`${url}/messages/${email}`);

      dispatch(fetchMessagesSuccessByEmail(mes.data.data));
    } catch (err) {
      console.log(err);
      dispatch(fetchMessagesFailureByEmail(err));
    }
  };
};
