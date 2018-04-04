import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Timeline } from 'antd';
import CommentHeader from '../../scenes/Comment/components/CommentHeader';
import CommentContent from '../../scenes/Comment/components/CommentContent';
import CommentControls from '../../scenes/Comment/components/CommentControls';
import { voteComment, getComment } from '../../data/comments/actions';

const { Item } = Timeline;

class CommentItem extends Component {
  handleVoteComment = (id, option) => {
    this.props.voteComment(id, option);
  }

  handleEditComment = (id) => {
    this.props.getComment(id);
  }

  render(){
    const {
      id,
      author,
      body,
      timestamp,
      voteScore,
    } = this.props;
    return (
      <Item>
        <CommentHeader
          username={author}
          date={timestamp}
          voteScore={voteScore}
        />
        <CommentContent description={body} />
        <CommentControls
          id={id}
          onVote={this.handleVoteComment}
          onEdit={this.handleEditComment}
        />
      </Item>
    )
  }
}

CommentItem.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  voteScore: PropTypes.number.isRequired,
};

const mapDispatchToProps = dispatch => ({
  voteComment: (id, option) => dispatch(voteComment(id, option)),
  getComment: id => dispatch(getComment(id)),
});

export default connect(null, mapDispatchToProps)(CommentItem);
