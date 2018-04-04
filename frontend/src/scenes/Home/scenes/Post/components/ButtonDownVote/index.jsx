import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const ButtonDownVote = ({ onClick }) => (
  <li>
    <Button onClick={onClick} type="danger" shape="circle" icon="dislike-o" ghost />
  </li>
);

ButtonDownVote.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonDownVote;
