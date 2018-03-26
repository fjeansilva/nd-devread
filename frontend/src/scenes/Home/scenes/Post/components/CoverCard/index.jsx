import React from 'react';
import { Icon } from 'antd';

const CoverCard = ({ totalComments }) => (
  <div className="post__card-cover">
    <div>
      <Icon type="delete" />
      <Icon type="edit" />
    </div>
    <div>
      {totalComments} comment(s)
    </div>
  </div>
);

export default CoverCard;
