import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from './data/posts/actions';
import PostList from './components/PostList';

class PostContainer extends Component {
  componentDidMount() {
    this.props.getPosts();
  }
  
  render(){
    const { recentPosts } = this.props;
    if (!recentPosts) return <span>Loading...</span>;
    return (
      <PostList items={recentPosts} />
    );
  }
}

const mapStateToProps = (state) => ({
  recentPosts: Object.values(state.Home.scenes.Post.data.posts).length > 0 ? Object.values(state.Home.scenes.Post.data.posts) : null,
});

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(fetchPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
// export default PostContainer;
