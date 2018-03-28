import React from 'react';
import { Icon } from 'antd';
import PropTypes from 'prop-types';

const CoverCard = ({ id, commentCount }) => (
  <div className="post__card-cover">
    <div>
      <Icon type="delete" onClick={() => console.log('delete post: ', id)} />
      <Icon type="edit" onClick={() => console.log('edit post: ', id)} />
    </div>
    <div>
      {commentCount} comment(s)
    </div>
  </div>
);

CoverCard.propTypes = {
  id: PropTypes.string.isRequired,
  commentCount: PropTypes.number.isRequired,
};

export default CoverCard;
