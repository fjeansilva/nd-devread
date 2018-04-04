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
import EditPostForm from '../Edit';
import { fetchPost, votePost, deletePost, resetPost } from '../../data/posts/actions';
import { fetchComments } from '../../data/comments/actions';
import Loader from '../../../../../../components/Loader';
import { showDeleteConfirm } from '../../../../../../utils/helpers';
import './index.css';

const text = 'I’ve been working on very large web applications for the past few years, starting from ground zero and, with a dozen other developers, making them scale up to now be used by millions of people. And sometimes, if you didn’t start with a good folder structure, it can become difficult to keep your code organized.';

class DetailsPost extends Component {
  state = {
    showEdit: false,
  }

  componentDidMount() {
    const { match } = this.props;
    const { post_id } = match.params;
    this.props.getPost(post_id);
    this.props.getComments(post_id);
  }

  onDeletePost = id => {
    const { deletePost, history, resetPost } = this.props;
    deletePost(id);
    history.push('/');
    resetPost();
  }

  onConfirmationDeletePost = id => showDeleteConfirm(this.onDeletePost, id);

  onEditPost = id => {
    this.props.getPost(id);
    this.setState({
      showEdit: true,
    });
  }

  onVotePost = (id, option) => this.props.votePost(id, option);

  handleUpdateDone = () => {
    this.setState({
      showEdit: false,
    });
  }

  render() {
    const { post, comments } = this.props;

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
            <ButtonDelete onClick={() => this.onConfirmationDeletePost(id)} />
            <ButtonEdit onClick={() => this.onEditPost(id)} />
            <ButtonUpVote onClick={() => this.onVotePost(id, 'upVote')} />
            <ButtonDownVote onClick={() => this.onVotePost(id, 'downVote')} />
          </GroupButton>
          <CommentList items={comments} />
        </Summary>
        <EditPostForm
          visible={this.state.showEdit}
          done={this.handleUpdateDone}
        />
        <Footer />
      </div>
    );
  }
}

DetailsPost.propTypes = {
  post: PropTypes.object,
  getPost: PropTypes.func.isRequired,
  votePost: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  resetPost: PropTypes.func.isRequired,
  getComments: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  post: state.Home.scenes.Post.postSelected,
  comments: Object.values(state.Home.scenes.Post.data.comments),
});

const mapDispatchToProps = dispatch => ({
  getPost: id => dispatch(fetchPost(id)),
  votePost: (id, option) => dispatch(votePost(id, option)),
  deletePost: id => dispatch(deletePost(id)),
  resetPost: () => dispatch(resetPost()),
  getComments: postId => dispatch(fetchComments(postId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPost);
