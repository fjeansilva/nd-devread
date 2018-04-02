import React from 'react';
import { Icon, Modal, Button } from 'antd';
import PropTypes from 'prop-types';

const confirm = Modal.confirm;

function showDeleteConfirm(callback, id) {
  confirm({
    title: 'Are you sure delete this post?',
    content: '',
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      callback(id);
    },
    onCancel() {
      console.log('Cancel');
    },
  });
}

const CoverCard = ({
  id, commentCount, onDelete, onEdit
}) => (
  <div className="post__card-cover">
    <div>
      <Icon type="delete" onClick={() => showDeleteConfirm(onDelete, id)} />
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
