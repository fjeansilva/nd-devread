import React from 'react';
import { Timeline, Button } from 'antd';
import CommentGroup from '../CommentGroup';
import CommentItem from '../CommentItem';
import CommentListHeader from '../CommentListHeader';

const text = "If you use Webpack, you can create an alias to define the root level of your project. Then you can use something like import Button from ‘MyApp/components/Button’.";

const CommentList = () => (
  <section>
    <CommentListHeader />
    <CommentGroup>
      <CommentItem username="Jean Carlos F." description={text} />
      <CommentItem username="Jean Silva." description={text} />
      <CommentItem username="Mark." description={text} />
      <CommentItem username="Steve" description={text} />
    </CommentGroup>
  </section>
);

export default CommentList;