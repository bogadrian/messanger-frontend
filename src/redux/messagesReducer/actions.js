import messagesActions from './types';
import axios from 'axios';
const url = process.env.REACT_APP_MESSANGER_BACKEND;
export const startFetchMessages = () => ({
  type: messagesActions.START_FETCH_MESSAGES
});

export const fetchMessagesSuccess = messages => {
  return { type: messagesActions.FETCH_MESSAGES_SUCCESS, payload: messages };
};
export const fetchMessagesFailure = error => {
  return { type: messagesActions.FETCH_MESSAGES_FAILURE, payload: error };
};

export const fetchMessages = room => {
  return async dispatch => {
    try {
      dispatch(startFetchMessages());
      const mes = await axios.get(`${url}/${room}`);

      dispatch(fetchMessagesSuccess(mes.data.data));
    } catch (err) {
      console.log(err);
      dispatch(fetchMessagesFailure(err));
    }
  };
};
