import React from 'react';
import { Card, Icon } from 'antd';
import CoverCard from '../CoverCard';
import ContentCard from '../ContentCard';
import '../post.css';

export default ({ id, title, body, totalComments, totalVotes }) => (
  <Card
    style={{ width: 300 }}
    cover={<CoverCard totalComments={`${totalComments}`} />}
    actions={[<div>Score 33</div>, <Icon type="like-o" />, <Icon type="dislike-o" />]}
  >
    <ContentCard title={title} body={body} />
  </Card>
);
