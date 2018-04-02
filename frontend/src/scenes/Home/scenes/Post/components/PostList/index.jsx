import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import '../../index.css';

const PostList = props => (
  <section className="posts">
    {props.items.map(p => <Card key={p.id} {...p} {...props} />)}
  </section>
);

PostList.propTypes = {
  items: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onVote: PropTypes.func.isRequired,
};

export default PostList;
