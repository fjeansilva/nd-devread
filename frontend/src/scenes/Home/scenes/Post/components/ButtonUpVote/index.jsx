import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const ButtonUpVote = ({ onClick }) => (
  <li>
    <Button onClick={onClick} type="primary" shape="circle" icon="like-o" ghost />
  </li>
);

ButtonUpVote.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonUpVote;
