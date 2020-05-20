import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import './InfoBar.css';

const InfoBar = ({ name }) => {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <div>
          <span
            style={{ color: 'white', fontSize: '18px', paddingLeft: '4px' }}
          >
            {name}
          </span>
        </div>
      </div>
      <div className="rightInnerContainer"></div>
    </div>
  );
};

export default InfoBar;
