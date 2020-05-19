import React from 'react';

import './InfoBar.css';

const InfoBar = ({ notifica, messages, name }) => {
  const trimmedName = name.trim().toLowerCase();

  const mess = messages.find(ms => ms.user === trimmedName);
  if (mess) {
  }

  let isSentByCurrentUser = false;

  if (mess && mess.user && mess.user !== trimmedName) {
    isSentByCurrentUser = true;
  }
  return (
    <div className="infoBar">
      <div className="leftInnerContainer"></div>
      <div className="rightInnerContainer">
        <div>
          <p>You have new message</p>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
