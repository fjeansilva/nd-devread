import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

const NotFoundPage = () => (
  <div className="not-found">
    <i className="far fa-frown" />
    <span>Oops!</span>
    <span>I'm sorry</span>
    <p>
      <NavLink to="/">
        Back to home
      </NavLink>
    </p>
  </div>
);

export default NotFoundPage;
