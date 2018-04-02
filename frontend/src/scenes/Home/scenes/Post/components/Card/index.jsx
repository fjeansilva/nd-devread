import React from 'react';
import PropTypes from 'prop-types';
import { Card, Icon } from 'antd';
import CoverCard from '../CoverCard';
import ContentCard from '../ContentCard';
import '../post.css';

export default function PostCard(props) {
  const {
    id, voteScore,
  } = props;
  return (
    <Card
      style={{ width: 300 }}
      cover={<CoverCard {...props} />}
      actions={[<div>Score {voteScore}</div>, <Icon type="like-o" onClick={() => console.log('upVote post: ', id)} />, <Icon type="dislike-o" onClick={() => console.log('down post: ', id)} />]}
    >
      <ContentCard {...props} />
    </Card>
  );
}

PostCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  voteScore: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};
