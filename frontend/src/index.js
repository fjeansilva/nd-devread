/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import EditComment from './scenes/Home/scenes/Post/scenes/Comment/scenes/Edit';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <EditComment />,
  document.getElementById('root'),
);
registerServiceWorker();
