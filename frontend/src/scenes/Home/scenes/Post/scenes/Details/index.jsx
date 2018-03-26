import React from 'react';
import { Button, Timeline } from 'antd';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faComments from '@fortawesome/fontawesome-free-solid/faComments';
import Header from '../../../../../../components/Header';
import MenuBar from '../../../../../../components/MenuBar';
import Footer from '../../../../../../components/Footer';
import Summary from './components/Summary';
import PostCategory from './components/PostCategory';
import PostTitle from './components/PostTitle';
import Info from './components/Info';
import GroupButton from '../../../Post/components/GroupButton';
import ButtonDelete from '../../../Post/components/ButtonDelete';
import ButtonEdit from '../../../Post/components/ButtonEdit';
import ButtonDownVote from '../../../Post/components/ButtonDownVote';
import ButtonUpVote from '../../../Post/components/ButtonUpVote';
import CommentList from '../../../Post/components/CommentList';
import './index.css';

const text = 'I’ve been working on very large web applications for the past few years, starting from ground zero and, with a dozen other developers, making them scale up to now be used by millions of people. And sometimes, if you didn’t start with a good folder structure, it can become difficult to keep your code organized.';

const DetailsPost = () => (
  <div>
    <Header />
    <MenuBar />
    <Summary>
      <PostCategory category="react" />
      <PostTitle title="React is Awesome!!"/>
      <Info
        username="Jean Silva"
        totalComments="666"
        totalScore="55"
        description={text}
      />
      <GroupButton>
        <ButtonDelete />
        <ButtonEdit />
        <ButtonDownVote />
        <ButtonUpVote />
      </GroupButton>
      <CommentList />
    </Summary>
    <Footer />
  </div>
);

export default DetailsPost;
