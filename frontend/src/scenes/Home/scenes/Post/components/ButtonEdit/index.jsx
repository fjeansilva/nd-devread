import React from 'react';
import { Button } from 'antd';

const ButtonEdit = ({ onClick }) => (
  <li>
    <Button onClick={onClick} shape="circle" icon="edit" />
  </li>
);

export default ButtonEdit;
