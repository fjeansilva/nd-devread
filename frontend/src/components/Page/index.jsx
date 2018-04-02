import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';

const Page = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);

Page.propTypes = {
  children: PropTypes.node,
};

Page.defaultProps = {
  children: '',
};

export default Page;
