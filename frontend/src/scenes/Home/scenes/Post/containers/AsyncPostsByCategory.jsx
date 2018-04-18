import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPostsByCategory } from '../data/posts/actions';
import PostContainer from './AsyncList';
import { orderPosts, filterPostsByCategory } from '../../../../../utils/helpers';

class AsyncPostsByCategory extends Component {
  state = {
    category: '',
  }

  componentDidMount() {
    const { match } = this.props;
    const { category } = match.params;
    this.props.getPostsByCategory(category);
    this.setState({
      category,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps === undefined) {
        return false
    }

    const { match } = this.props;
    const { category } = match.params;

    if (this.state.category !== category) {
      this.props.getPostsByCategory(category);
      this.setState({
        category,
      });
    }
  }

  render() {
    const { category } = this.state;
    const { posts } = this.props;
    if (!posts) return;
    return (
      <PostContainer recentPosts={filterPostsByCategory(posts, category)} {...this.props}/>
    );
  }
}

const mapStateToProps = state => ({
  posts: orderPosts(state.Home.scenes.Post.data.posts, state.Home.scenes.Post.postsOrderBy),
});

const mapDispatchToProps = dispatch => ({
  getPostsByCategory: category => dispatch(fetchPostsByCategory(category)),
});

AsyncPostsByCategory.propTypes = {
  getPostsByCategory: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AsyncPostsByCategory);

