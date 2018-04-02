import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from '../../components/Page';
import MenuBar from './scenes/Post/components/MenuBar';
import CategoryBar from '../Home/scenes/Category/components/CategoryBar';
import PostContainer from './scenes/Post';
import CreatePostForm from './scenes/Post/scenes/Create';
import EditPostForm from './scenes/Post/scenes/Edit';
import { addPost } from './scenes/Post/data/posts/actions';
import './index.css';

class Home extends Component {
  state = {
    visibleCreateForm: false,
  }

  handleClick = (e) => {
    e.preventDefault();
    this.onVisibleCreateForm();
  }

  onVisibleCreateForm = () => {
    this.setState((state) => ({
      visibleCreateForm: !state.visibleCreateForm,
    }));
  }

  handlePostCreate = values => {
    this.props.addPost(values);
  }

  handlePostEdit = values => {
    console.log(values);
  }

  handleFormChange = (changedFields) => {
    this.setState(({ fields }) => ({
      fields: { ...fields, ...changedFields },
    }));
  }

  render() {
    const { visibleCreateForm } = this.state;
    const { postSelected } = this.props;
    return (
      <Page>
        <MenuBar handleClick={this.handleClick} />
        <CategoryBar />
        <PostContainer />
        <CreatePostForm
          visible={visibleCreateForm}
          onCancel={this.onVisibleCreateForm}
          onSubmit={this.handlePostCreate}
        />
        <EditPostForm
          onSubmit={this.handlePostEdit}
          onChange={this.handleFormChange}
        />
      </Page>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addPost: values => dispatch(addPost(values)),
});

export default connect(null, mapDispatchToProps)(Home);