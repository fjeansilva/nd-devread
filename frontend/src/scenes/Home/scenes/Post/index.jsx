import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts, deletePost, fetchPost, votePost } from './data/posts/actions';
import { getCategories } from './data/categories/actions';
import PostList from './components/PostList';
import Loader from '../../../../components/Loader';
import {
  ORDER_BY_VOTE_SCORE,
  ORDER_BY_DATE_CREATED,
} from './constants/OrderByTypes';

const styleSpin = {
  position: 'absolute',
  top: '50%',
  left: '50%',
};

const orderPosts = (posts, orderBy) => {
  if (Object.keys(posts).length === 0) return [];
  const items = Object.values(posts);

  if (!orderBy) return items;

  switch (orderBy) {
    case ORDER_BY_VOTE_SCORE:
      return items.sort((a, b) => b.voteScore > a.voteScore);
    case ORDER_BY_DATE_CREATED:
      return items.sort((a, b) => b.timestamp > a.timestamp);
    default:
      return items;
  }
};

class PostContainer extends Component {
  componentDidMount() {
    this.props.getPosts();
    this.props.getCategories();
  }

  onDeletePost = id => {
    this.props.deletePost(id);
  }

  onEditPost = id => {
    this.props.getPost(id);
    this.props.handleEdit();
  }

  onVotePost = (id, option) => {
    this.props.votePost(id, option);
  }

  render() {
    const { recentPosts, error } = this.props;
    if (!recentPosts) return <Loader />;
    return (
      <PostList
        items={recentPosts}
        onDelete={this.onDeletePost}
        onEdit={this.onEditPost}
        onVote={this.onVotePost}
      />
    );
  }
}


const mapStateToProps = state => ({
  recentPosts: orderPosts(state.Home.scenes.Post.data.posts, state.Home.scenes.Post.postsOrderBy),
  error: state.Home.scenes.Post.error,
});

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(fetchPosts()),
  getPost: id => dispatch(fetchPost(id)),
  deletePost: id => dispatch(deletePost(id)),
  votePost: (id, option) => dispatch(votePost(id, option)),
  getCategories: () => dispatch(getCategories()),
});

PostContainer.propTypes = {
  getPosts: PropTypes.func.isRequired,
  recentPosts: PropTypes.array.isRequired,
  error: PropTypes.string,
  deletePost: PropTypes.func.isRequired,
  getPost: PropTypes.func.isRequired,
  votePost: PropTypes.func.isRequired,
};

PostContainer.defaultProps = {
  error: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
