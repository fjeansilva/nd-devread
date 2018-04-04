import React from 'react';
import PropTypes from 'prop-types';
import CommentGroup from '../CommentGroup';
import CommentItem from '../CommentItem';
import CommentListHeader from '../CommentListHeader';

const CommentList = ({ items }) => (
  <section>
    <CommentListHeader commentCount={items.length} />
    <CommentGroup>
      {items.map(c => <CommentItem key={c.id} {...c} />)}
    </CommentGroup>
  </section>
);

CommentList.propTypes = {
  items: PropTypes.array,
};

export default CommentList;
