import React from 'react';
import PropTypes from 'prop-types';
import CommentGroup from '../CommentGroup';
import CommentItem from '../CommentItem';
import CommentListHeader from '../CommentListHeader';
import CreateComment from '../../scenes/Comment/scenes/Create';

const CommentList = ({ postId, items }) => (
  <section>
    <CommentListHeader commentCount={items.length} />
    <CreateComment postId={postId} />
    <CommentGroup>
      {items.map(c => <CommentItem key={c.id} {...c} />)}
    </CommentGroup>
  </section>
);

CommentList.propTypes = {
  items: PropTypes.array,
  postId: PropTypes.string.isRequired,
};

export default CommentList;
