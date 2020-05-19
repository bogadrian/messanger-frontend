import React, { useEffect, Fragment } from 'react';

import { useDispatch } from 'react-redux';
import { fetchMe } from '../../redux/meReducer/actions';

import Home from './Join';

const JoinWrapper = () => {
  const dispatch = useDispatch();

  //////////////////////////////////
  // set the token

  //////////////////////////////////////////
  // call get me
  useEffect(() => {
    let clean = true;
    const token = localStorage.getItem('token');

    if (clean) {
      dispatch(fetchMe(token));
    }
    return () => {
      clean = false;
    };
  }, [dispatch]);
  ////////////////////////////////////////////////////////////////////////////////
  // call the room

  return (
    <Fragment>
      <Home />
    </Fragment>
  );
};

export default JoinWrapper;
