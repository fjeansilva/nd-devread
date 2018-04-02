import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Notification from '../../../../components/Notification';
import { fetchPosts, deletePost, fetchPost } from './data/posts/actions';
import PostList from './components/PostList';
import Loader from '../../../../components/Loader';

const styleSpin = {
  position: 'absolute',
  top: '50%',
  left: '50%',
};

class PostContainer extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  onDeletePost = id => {
    this.props.deletePost(id);
  }

  onEditPost = id => {
    this.props.getPost(id);
  }

  render() {
    const { recentPosts, error } = this.props;
    if (!recentPosts) return <Loader />;
    return (
      <div>
        <PostList items={recentPosts} onDelete={this.onDeletePost} onEdit={this.onEditPost}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recentPosts: Object.values(state.Home.scenes.Post.data.posts).length > 0 ?
    Object.values(state.Home.scenes.Post.data.posts) : [],
  error: state.Home.scenes.Post.error,
});

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(fetchPosts()),
  getPost: id => dispatch(fetchPost(id)),
  deletePost: id => dispatch(deletePost(id)),
});

PostContainer.propTypes = {
  getPosts: PropTypes.func.isRequired,
  recentPosts: PropTypes.array.isRequired,
  error: PropTypes.string,
  deletePost: PropTypes.func.isRequired,
  getPost: PropTypes.func.isRequired,
};

PostContainer.defaultProps = {
  error: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
