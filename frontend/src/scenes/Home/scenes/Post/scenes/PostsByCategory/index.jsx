import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from '../../../../../../components/Page';
import MenuBar from '../../../Post/components/MenuBar';
import CategoryBar from '../../../Category/components/CategoryBar';
import AsyncPostsByCategory from '../../containers/AsyncPostsByCategory';
import CreatePostForm from '../Create';
import EditPostForm from '../Edit';
import { addPost } from '../../data/posts/actions';
import './index.css';
import { notification } from 'antd';

const successNotification = (type) => {
  notification[type]({
    message: 'Success',
    description: 'Post created successfully.',
  });
};

class PostsByCategory extends Component {
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
    
    return (
      <Page>
        <MenuBar handleClick={this.handleClick} />
        <CategoryBar />
        <AsyncPostsByCategory handleEdit={this.handleModal} {...this.props} />
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

export default connect(mapStateToProps, mapDispatchToProps)(PostsByCategory);