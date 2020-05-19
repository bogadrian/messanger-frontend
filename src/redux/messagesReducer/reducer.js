import messagesActions from './types';

const INITAL_STATE = {
  messages: null,
  error: null,
  isLoading: false
};

const messagesReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case messagesActions.START_FETCH_MESSAGES:
      return {
        ...state,
        isLoading: true
      };
    case messagesActions.FETCH_MESSAGES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        messages: action.payload,
        error: null
      };
    case messagesActions.FETCH_MESSAGES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default messagesReducer;
