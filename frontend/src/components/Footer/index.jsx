import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart';
import './index.css';

const Footer = () => (
  <footer className="footer">
    <p>
      <b>DEVREAD</b> Ⓒ Copyright 2018 - Made with <FontAwesomeIcon icon={faHeart} color="red" /> by <a href="https://twitter.com/fjeansilva">Jean Silva</a>
    </p>
  </footer>
);

export default Footer;
