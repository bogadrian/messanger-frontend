import React, { useEffect, useState, Fragment } from 'react';

import queryString from 'query-string';

import { useSelector, useDispatch } from 'react-redux';

import { fetchMessagesByEmail } from '../../redux/setMessagesByEmailReducer/actions';

import RoomList from './RoomLists';
import './Join.css';

const Home = () => {
  const [token, setToken] = useState();
  const myEmail = useSelector(state => state.me.me);
  console.log(process.env.REACT_APP_URL);
  let mes = [];
  const mess = useSelector(state => state.messagesEmail);

  if (mess && mess.messagesEmail) {
    mes = mess.messagesEmail;
  }

  const dispatch = useDispatch();
  //////////////////////////////////
  // set the token
  useEffect(() => {
    // eslint-disable-next-line no-restricted-globals
    const { token, enabled } = queryString.parse(location.search);
    setToken(token);

    if (token && enabled) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

  ////////////////////////////////////////////////////////////////////////////////
  // call the room
  useEffect(() => {
    dispatch(fetchMessagesByEmail(myEmail));
  }, [myEmail, dispatch]);

  return (
    <Fragment>
      <div className="joinOuterContainer">
        <div>
          <div>
            {mes.length === 0 ? (
              <div>
                <h2 style={{ color: 'white' }}>
                  {token
                    ? 'You can now recive messages'
                    : 'You turned your messages off!'}
                </h2>
                <a href={`${process.env.REACT_APP_PYT_FRONTEND}/my-profile`}>
                  <h3 style={{ color: 'white' }}>Go back</h3>
                </a>
              </div>
            ) : (
              <RoomList room={mes} myEmail={myEmail} />
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
