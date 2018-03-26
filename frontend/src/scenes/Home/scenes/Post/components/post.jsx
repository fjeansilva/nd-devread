import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faComments from '@fortawesome/fontawesome-free-solid/faComments';
import { Card, Icon, Avatar } from 'antd';
import './post.css';

const { Meta } = Card;

const CoverTemplate = () => (
  <div className="post__card-cover">
    <FontAwesomeIcon icon={faComments} /> 344 comment(s)
  </div>
);

const Post = () => (
  <Card
    style={{ width: 300 }}
    cover={<CoverTemplate />}
    actions={[<Icon type="delete" />, <Icon type="edit" />, <div><Icon type="like-o" /> 88 </div>, <div><Icon type="dislike-o" /> 32 </div>]}
  >
    <Meta
      avatar={<Avatar style={{ backgroundColor: '#87d068' }} icon="user" />}
      title="Use Redux on highly scalable JavaScript apps"
      description="Building a large scale application can be problematic, and as it grows it becomes more and more..."
    />
  </Card>
);

export default Post;
