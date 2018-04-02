import React from 'react';
import PropTypes from 'prop-types';
import { Card, Icon } from 'antd';
import CoverCard from '../CoverCard';
import ContentCard from '../ContentCard';
import '../post.css';

export default function PostCard(props) {
  const {
    id,
    voteScore,
    onVote,
  } = props;

  const wrapperActions = [
    <div>Score {voteScore}</div>,
    <Icon type="like-o" onClick={() => onVote(id, 'upVote')} />,
    <Icon type="dislike-o" onClick={() => onVote(id, 'downVote')} />,
  ];

  return (
    <Card
      style={{ width: 300 }}
      cover={<CoverCard {...props} />}
      actions={wrapperActions}
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
  onVote: PropTypes.func.isRequired,
};
