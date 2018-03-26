/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import DetailPost from './scenes/Home/scenes/Post/scenes/Details';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <DetailPost />
  </BrowserRouter>,
  document.getElementById('root'),
);
registerServiceWorker();
