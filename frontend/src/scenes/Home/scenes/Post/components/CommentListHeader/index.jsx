import React from 'react';
import PropTypes from 'prop-types';

const CommentListHeader = ({ commentCount }) => (
  <p style={{
      margin: '30px 0',
      borderTop: '1px solid #e4e4e4',
      padding: '30px 0',
      }}>
    <b>{commentCount} Comment(s)</b>
  </p>
);

CommentListHeader.propTypes = {
  commentCount: PropTypes.number.isRequired,
};

export default CommentListHeader;
