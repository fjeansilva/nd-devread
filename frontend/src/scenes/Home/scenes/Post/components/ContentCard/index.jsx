import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import AvatarUser from '../AvatarUser';

const { Meta } = Card;

const CardContent = ({
  id, category, title, author,
}) => (
  <Meta
    avatar={<AvatarUser />}
    title={<Link to={`/${category}/${id}`}>{title}</Link>}
    description={author}
  />
);

CardContent.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default CardContent;
