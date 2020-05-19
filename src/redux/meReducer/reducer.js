import getMeActions from './types';

const INTIAL_STATE = {
  me: null,
  isLoading: false,
  arror: null
};

const meReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case getMeActions.START_FETCH_ME:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case getMeActions.FETCH_ME_SUCCESS:
      return {
        ...state,
        isLoading: false,
        me: action.payload,
        error: null
      };
    case getMeActions.FETCH_ME_FAILURE:
      return {
        ...state,
        isLoading: false,
        me: null,
        error: action.payload
      };
    default:
      return state;
  }
};

export default meReducer;
