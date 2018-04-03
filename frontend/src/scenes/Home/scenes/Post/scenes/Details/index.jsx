import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../../../../../../components/Header';
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
import { fetchPost, votePost } from '../../data/posts/actions';
import Loader from '../../../../../../components/Loader';
import './index.css';

const text = 'I’ve been working on very large web applications for the past few years, starting from ground zero and, with a dozen other developers, making them scale up to now be used by millions of people. And sometimes, if you didn’t start with a good folder structure, it can become difficult to keep your code organized.';

class DetailsPost extends Component {
  componentDidMount() {
    const { match } = this.props;
    const { post_id } = match.params;
    this.props.getPost(post_id);
  }

  handleVote = (id, option) => {
    this.props.votePost(id, option);
  }

  render() {
    const { post } = this.props;

    if (!post) return <Loader />;

    const {
      id,
      title,
      category,
      author,
      commentCount,
      voteScore,
      body,
      timestamp,
    } = post;

    return (
      <div>
        <Header />
        <Summary>
          <PostCategory category={category} />
          <PostTitle title={title} />
          <Info
            username={author}
            totalComments={commentCount}
            totalScore={voteScore}
            description={body}
            date={timestamp}
          />
          <GroupButton>
            <ButtonDelete />
            <ButtonEdit />
            <ButtonUpVote onClick={() => this.handleVote(id, 'upVote')} />
            <ButtonDownVote onClick={() => this.handleVote(id, 'downVote')} />
          </GroupButton>
          <CommentList />
        </Summary>
        <Footer />
      </div>
    );
  }
}

DetailsPost.propTypes = {
  post: PropTypes.object,
  getPost: PropTypes.func.isRequired,
  votePost: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  post: state.Home.scenes.Post.postSelected,
});

const mapDispatchToProps = dispatch => ({
  getPost: id => dispatch(fetchPost(id)),
  votePost: (id, option) => dispatch(votePost(id, option)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPost);
