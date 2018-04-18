import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../data/posts/actions';
import PostContainer from './AsyncList';
import { orderPosts } from '../../../../../utils/helpers';

class AsyncPosts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    return (
      <PostContainer {...this.props} />
    );
  }
}

const mapStateToProps = state => ({
  recentPosts: orderPosts(state.Home.scenes.Post.data.posts, state.Home.scenes.Post.postsOrderBy),
  error: state.Home.scenes.Post.error,
});

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(fetchPosts()),
});

AsyncPosts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  recentPosts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AsyncPosts);

