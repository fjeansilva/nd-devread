import React from 'react';
import Header from '../../components/Header';
import MenuBar from '../../components/MenuBar';
import Footer from '../../components/Footer';
import CategoryBar from './scenes/Category/components/CategoryBar';
import PostContainer from './scenes/Post';
import './index.css';

const Home = () => (
  <div className="home">
    <Header />
    <MenuBar />
    <CategoryBar />
    <PostContainer />
    <Footer />
  </div>
);

export default Home;
