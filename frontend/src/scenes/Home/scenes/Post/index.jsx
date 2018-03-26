import React from 'react';
import Post from './components/post';
import './index.css';

const listOfPosts = () => {
  const posts = [1, 2, 3, 4, 5, 6];
  return posts.map(p => <Post key={p} />);
};

const ListPosts = () => (
  <section className="posts">
    {listOfPosts()}
  </section>
);

export default ListPosts;
