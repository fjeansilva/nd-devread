import React from 'react';
import { Timeline, Button } from 'antd';
import CommentHeader from '../../scenes/Comment/components/CommentHeader';
import CommentContent from '../../scenes/Comment/components/CommentContent';
import CommentControls from '../../scenes/Comment/components/CommentControls';

const Item = Timeline.Item;

const CommentItem = ({ username, description }) => (
  <Item>
    <CommentHeader username={username} />
    <CommentContent description={description} />
    <CommentControls />
  </Item>
);

export default CommentItem;