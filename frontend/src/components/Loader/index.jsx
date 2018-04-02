import React from 'react';
import { Spin } from 'antd';

const Loader = () => (
  <Spin size="large" style={{
    position: 'absolute',
    top: '50%',
    left: '50%',
  }} />
);

export default Loader;
