import React from 'react';
import PropTypes from 'prop-types';
import GroupButton from '../../../../components/GroupButton';
import ButtonDelete from '../../../../components/ButtonDelete';
import ButtonEdit from '../../../../components/ButtonEdit';
import ButtonUpVote from '../../../../components/ButtonUpVote';
import ButtonDownVote from '../../../../components/ButtonDownVote';

const CommentControls = ({
  id,
  onVote,
  onEdit,
  onDelete,
}) => (
  <GroupButton>
    <ButtonDelete onClick={() => onDelete(id)} />
    <ButtonEdit onClick={() => onEdit(id)} />
    <ButtonUpVote onClick={() => onVote(id, 'upVote')} />
    <ButtonDownVote onClick={() => onVote(id, 'downVote')} />
  </GroupButton>
);

CommentControls.propTypes = {
  id: PropTypes.string.isRequired,
  onVote: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CommentControls;
