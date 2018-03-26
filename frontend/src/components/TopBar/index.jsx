import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faGgCircle from '@fortawesome/fontawesome-free-brands/faGgCircle';
import './index.css';

const TopBar = () => (
  <div className="top__bar">
    <Link to="/" className="project__logo" >
      <FontAwesomeIcon
        icon={faGgCircle}
        size="2x"
        color="#252526"
      />
      <span className="project__name">
        DEVREAD
      </span>
    </Link>
  </div>
);

export default TopBar;
