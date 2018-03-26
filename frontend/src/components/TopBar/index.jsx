import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faGgCircle from '@fortawesome/fontawesome-free-brands/faGgCircle';
import './index.css';

const TopBar = () => (
  <div className="top__bar">
    <a className="project__logo" href="/">
      <FontAwesomeIcon
        icon={faGgCircle}
        size="2x"
        color="#252526"
      />
      <span className="project__name">
        DEVREAD
      </span>
    </a>
  </div>
);

export default TopBar;
