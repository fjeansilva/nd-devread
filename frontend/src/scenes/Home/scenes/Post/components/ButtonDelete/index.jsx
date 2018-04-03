import React from 'react';
import { Button } from 'antd';

const ButtonDelete = ({ onClick }) => (
  <li>
    <Button onClick={onClick} shape="circle" icon="delete" />
  </li>
);

export default ButtonDelete;
