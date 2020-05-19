import toggleReadActions from './types';

const INITIAL_STATE = {
  read: false,
  error: null
};

const toggleReadReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case toggleReadActions.TOGGLE_READ_SUCCESS:
      console.log(state.messages);
      return {
        ...state,

        read: action.payload
      };
    case toggleReadActions.TOGGLE_READ_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};

export default toggleReadReducer;
