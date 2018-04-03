import React from 'react';
import { Button } from 'antd';

const ButtonDownVote = ({ onClick }) => (
  <li>
    <Button onClick={onClick} type="danger" shape="circle" icon="dislike-o" ghost />
  </li>
);

export default ButtonDownVote;
