import React from 'react';
import Card from './components/Card';
import './index.css';

const postInfo = {
  id: '1',
  title: 'React and Redux are awesome',
  body: 'Not everything can be a component, and you will need to create independent modules that can be used by your components or scenes.',
  totalComments: 459,
  totalVotes: 33,
};

const listOfPosts = () => {
  const posts = [1, 2, 3, 4, 5, 6];
  return posts.map(p => <Card key={p} {...postInfo} />);
};

const ListPosts = () => (
  <section className="posts">
    {listOfPosts()}
  </section>
);

export default ListPosts;
