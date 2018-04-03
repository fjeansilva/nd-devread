import React from 'react';
import { Button } from 'antd';

const ButtonUpVote = ({ onClick }) => (
  <li>
    <Button onClick={onClick} type="primary" shape="circle" icon="like-o" ghost />
  </li>
);

export default ButtonUpVote;
