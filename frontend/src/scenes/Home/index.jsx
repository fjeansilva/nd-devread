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
import { notification } from 'antd';

const successNotification = (type) => {
  notification[type]({
    message: 'Success',
    description: 'Post created successfully.',
  });
};

class Home extends Component {
  state = {
    visibleCreateForm: false,
    showEditForm: false,
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
    successNotification('success');
  }

  handleFormChange = (changedFields) => {
    this.setState(({ fields }) => ({
      fields: { ...fields, ...changedFields },
    }));
  }

  handleUpdateDone = () => {    
    this.setState({
      showEditForm: false,
    });
  }

  handleModal = () => {
    this.setState({
      showEditForm: true,
    });
  }

  render() {
    const { visibleCreateForm } = this.state;
    const { postSelected } = this.props;
  
    return (
      <Page>
        <MenuBar handleClick={this.handleClick} />
        <CategoryBar />
        <PostContainer handleEdit={this.handleModal} />
        <CreatePostForm
          visible={visibleCreateForm}
          onCancel={this.onVisibleCreateForm}
          onSubmit={this.handlePostCreate}
        />
        <EditPostForm
          visible={this.state.showEditForm}
          done={this.handleUpdateDone}
        />
      </Page>
    );
  }
}
const mapStateToProps = state => ({
  postSelected: state.Home.scenes.Post.postSelected,
});

const mapDispatchToProps = dispatch => ({
  addPost: values => dispatch(addPost(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);