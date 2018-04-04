import React from 'react';
import PropTypes from 'prop-types';
import TimeAgo from 'timeago-react';
import UserInfo from '../../../../components/UserInfo';

const CommentHeader = ({ username, date, voteScore }) => (
  <p>
    <UserInfo username={username} /> - <TimeAgo datetime={date} live /> - Score {voteScore}
  </p>
);

CommentHeader.propTypes = {
  username: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  voteScore: PropTypes.number.isRequired,
};

export default CommentHeader;
