import React, { useState, useEffect } from 'react';

import queryString from 'query-string';
import io from 'socket.io-client';

import { useDispatch, useSelector } from 'react-redux';
//import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import { fetchMessages } from '../../redux/messagesReducer/actions';
import './Chat.css';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [reciver, setReciver] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [room, setRoom] = useState('');
  const dispatch = useDispatch();

  const messagesFetched = useSelector(state => state.messages.messages);

  const ENDPOINT = process.env.REACT_APP_MESSANGER_BACKEND;

  useEffect(() => {
    const { name, reciver, myEmail, reciverEmail } = queryString.parse(
      location.search
    );

    let room = `${myEmail}${reciverEmail}`;
    room = room.split('').sort().join('').slice(4);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);
    setReciver(reciver);

    socket.emit(
      'join',
      { name, room, reciver, myEmail, reciverEmail },
      error => {
        if (error) {
          console.log(error);
        }
      }
    );
  }, [ENDPOINT, location.search]);
  //////////////////////////////
  useEffect(() => {
    dispatch(fetchMessages(room));
  }, [room, dispatch]);

  ///////////////////
  useEffect(() => {
    socket.on(
      'message',
      message => {
        setMessages(messages.concat(message));
      },
      [message]
    );

    return () => {
      socket.emit('disconnect');

      socket.off();
    };
  }, [messages, message]);

  //////////////////////////////

  useEffect(() => {
    if (messagesFetched) {
      const m = messagesFetched.map(ms => {
        const user = ms.name;
        const text = ms.text;
        return { user, text };
      });

      setMessages([...m]);
    }
  }, [messagesFetched]);

  /////////////////////////////////
  const sendMessage = event => {
    event.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar messages={messages} name={reciver} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};

export default Chat;
