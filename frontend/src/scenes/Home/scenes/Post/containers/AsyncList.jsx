import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deletePost, fetchPost, votePost } from '../data/posts/actions';
import { getCategories } from '../data/categories/actions';
import PostList from '../components/PostList';
import Loader from '../../../../../components/Loader';

class AsyncList extends Component {
  componentDidMount() {
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
    const { recentPosts } = this.props;
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
  error: state.Home.scenes.Post.error,
});

const mapDispatchToProps = dispatch => ({
  getPost: id => dispatch(fetchPost(id)),
  deletePost: id => dispatch(deletePost(id)),
  votePost: (id, option) => dispatch(votePost(id, option)),
  getCategories: () => dispatch(getCategories()),
});

AsyncList.propTypes = {
  error: PropTypes.string,
  deletePost: PropTypes.func.isRequired,
  getPost: PropTypes.func.isRequired,
  votePost: PropTypes.func.isRequired,
};

AsyncList.defaultProps = {
  error: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(AsyncList);
