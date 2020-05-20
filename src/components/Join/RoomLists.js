import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { startToggleRead } from '../../redux/toggleReadReducer/actions';

import './roomList.scss';

const RoomList = () => {
  const [mess, setMess] = useState([]);
  const dispatch = useDispatch();
  let arr = useSelector(state => state.messagesEmail.messagesEmail);
  const myEmail = useSelector(state => state.me.me);
  console.log(mess);

  useEffect(() => {
    let messagesFiltred = [];
    let obj = {};

    for (let i in arr) {
      const objProp = arr[i]['name'];

      obj[objProp] = arr[i];
    }
    for (let i in obj) {
      messagesFiltred.push(obj[i]);
    }

    setMess([...messagesFiltred]);
  }, [arr]);

  const handleRead = (id, read) => {
    read = true;
    dispatch(startToggleRead(id, read));
  };

  const mine = mess.filter(el => el.myEmail !== myEmail);

  return (
    <div>
      <div>
        <h1 style={{ color: 'white' }}>Your Messages:</h1>
        {mine
          .slice(0, 20)
          .reverse()
          .map((ro, i) => (
            <div key={i}>
              <div
                className={ro.read ? 'mes-div' : 'mes'}
                onClick={handleRead.bind(this, ro._id, ro.read)}
              >
                <span
                  style={{
                    color: 'white',
                    fontSize: '18px',
                    padding: '20px'
                  }}
                >
                  New message from:
                </span>
                <Link
                  style={{
                    textDecoration: 'none',
                    color: 'white',
                    fontSize: '18px',
                    marginTop: '14px'
                  }}
                  to={`/chat?name=${ro.reciver}&reciver=${ro.name}&myEmail=${myEmail}&reciverEmail=${ro.myEmail}`}
                >
                  <span>{ro.name}</span>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RoomList;
