import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';

import meReducer from './meReducer/reducer';
import messagesReducer from './messagesReducer/reducer';
import messagesByEmailReducer from './setMessagesByEmailReducer/reducer';
import toggleReadReducer from './setMessagesByEmailReducer/reducer';

const middleware = [ReduxThunk, logger];

const rootReducer = combineReducers({
  me: meReducer,
  messages: messagesReducer,
  messagesEmail: messagesByEmailReducer,
  read: toggleReadReducer
});
const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
