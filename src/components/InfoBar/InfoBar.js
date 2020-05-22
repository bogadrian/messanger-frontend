import React from 'react';

import './InfoBar.css';
import Img from './blue-arrow.png';

const InfoBar = ({ name }) => {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <a href="https://park-your-tir.netlify.app">
          <img src={Img} alt="blue" style={{ height: '30px' }} />
        </a>
        <div></div>
      </div>
      <div className="rightInnerContainer">
        <span style={{ color: 'white', fontSize: '18px', paddingLeft: '4px' }}>
          {name}
        </span>
      </div>
    </div>
  );
};

export default InfoBar;
