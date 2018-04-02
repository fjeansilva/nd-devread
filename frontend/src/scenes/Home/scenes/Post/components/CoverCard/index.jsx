import React from 'react';
import { Icon } from 'antd';
import PropTypes from 'prop-types';

const CoverCard = ({
  id, commentCount, onDelete, onEdit
}) => (
  <div className="post__card-cover">
    <div>
      <Icon type="delete" onClick={() => onDelete(id)} />
      <Icon type="edit" onClick={() => onEdit(id)} />
    </div>
    <div>
      {commentCount} comment(s)
    </div>
  </div>
);

CoverCard.propTypes = {
  id: PropTypes.string.isRequired,
  commentCount: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default CoverCard;
