import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const ButtonEdit = ({ onClick }) => (
  <li>
    <Button onClick={onClick} shape="circle" icon="edit" />
  </li>
);

ButtonEdit.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonEdit;
