import React from 'react';
import GroupButton from '../../../../components/GroupButton';
import ButtonDelete from '../../../../components/ButtonDelete';
import ButtonEdit from '../../../../components/ButtonEdit';
import ButtonUpVote from '../../../../components/ButtonUpVote';
import ButtonDownVote from '../../../../components/ButtonDownVote';

const CommentControls = () => (
  <GroupButton>
    <ButtonDelete />
    <ButtonEdit />
    <ButtonDownVote />
    <ButtonUpVote />
  </GroupButton>
);

export default CommentControls;