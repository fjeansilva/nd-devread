import React from 'react';
import UserInfo from '../../../../components/UserInfo';

const CommentHeader = ({ username }) => (
  <p>
    <UserInfo username={username} /> - 13 Maio, 2018 - Score -999
  </p>
);

export default CommentHeader;