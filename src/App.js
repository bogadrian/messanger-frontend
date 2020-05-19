import React from 'react';

import { Provider } from 'react-redux';

import store from './redux/store';

import Chat from './components/Chat/Chat';
import JoinWrapper from './components/Join/JoinWrapper';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" exact component={JoinWrapper} />
        <Route exact path="/chat" component={Chat} />
      </Router>
    </Provider>
  );
};

export default App;
