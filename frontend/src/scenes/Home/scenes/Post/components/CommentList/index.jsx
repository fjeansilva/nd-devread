import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CommentGroup from '../CommentGroup';
import CommentItem from '../CommentItem';
import CommentListHeader from '../CommentListHeader';
import CreateComment from '../../scenes/Comment/scenes/Create';
import EditComment from '../../scenes/Comment/scenes/Edit';

const CommentList = ({ postId, items, commentSelected }) => (
  <section>
    <CommentListHeader commentCount={items.length} />
    {!commentSelected && (
      <CreateComment postId={postId} />
    )}
    {commentSelected && (
      <EditComment comment={commentSelected} />
    )}
    <CommentGroup>
      {items.map(c => <CommentItem key={c.id} {...c} />)}
    </CommentGroup>
  </section>
);

CommentList.propTypes = {
  items: PropTypes.array,
  postId: PropTypes.string.isRequired,
  commentSelected: PropTypes.object,
};

const mapStateToProps = state => ({
  commentSelected: state.Home.scenes.Post.commentSelected,
});

export default connect(mapStateToProps)(CommentList);
