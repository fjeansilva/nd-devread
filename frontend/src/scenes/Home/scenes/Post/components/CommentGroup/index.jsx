import React from 'react';
import { Timeline } from 'antd';

const CommentGroup = ({ children }) => (
  <Timeline>
    {children}
  </Timeline>
);

export default CommentGroup;