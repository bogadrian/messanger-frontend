import setMessagesActions from './types';

const INITIAL_STATE = {
  isLoading: false,
  messagesEmail: null,
  error: null
};

const messagesByEmailReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case setMessagesActions.START_FETCH_BY_EMAIL:
      return {
        ...state,
        isLoading: true
      };
    case setMessagesActions.FETCH_BY_EMAIL_SUCCESS:
      return { ...state, isLoading: false, messagesEmail: action.payload };
    case setMessagesActions.FETCH_BY_EMAIL_FAILURE:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};

export default messagesByEmailReducer;
