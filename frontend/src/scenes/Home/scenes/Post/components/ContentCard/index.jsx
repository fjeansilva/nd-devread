import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import AvatarUser from '../AvatarUser';

const { Meta } = Card;

const CardContent = ({
  id, category, title, body,
}) => (
  <Meta
    avatar={<AvatarUser />}
    title={<Link to={`/${category}/${id}`}>{title}</Link>}
    description={body.slice(0, 50).concat('...')}
  />
);

CardContent.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default CardContent;
