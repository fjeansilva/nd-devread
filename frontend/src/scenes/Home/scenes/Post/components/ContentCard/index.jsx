import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import AvatarUser from '../AvatarUser';

const { Meta } = Card;

const CardContent = ({ title, body }) => (
  <Meta
    avatar={<AvatarUser />}
    title={<Link to="/react/postid">{title}</Link>}
    description={body}
  />
);

export default CardContent;
