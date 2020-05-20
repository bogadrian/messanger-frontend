import React, { Suspense } from 'react';

import { Provider } from 'react-redux';

import store from './redux/store';

import Chat from './components/Chat/Chat';
import JoinWrapper from './components/Join/JoinWrapper';
import Spinner from './components/spinner/spinner';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <Provider store={store}>
      <Suspense fallback={<Spinner />}>
        <Router>
          <Route path="/" exact component={JoinWrapper} />
          <Route exact path="/chat" component={Chat} />
        </Router>
      </Suspense>
    </Provider>
  );
};

export default App;
