import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import '../../index.css';

const PostList = ({ items }) => (
  <section className="posts">
    {items.map(p => <Card key={p.id} {...p} />)}
  </section>
);

PostList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default PostList;
