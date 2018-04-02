import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Modal } from 'antd';
import { connect } from 'react-redux';
import { editPost, resetPost } from '../../data/posts/actions';
import './index.css';

const FormItem = Form.Item;
const { TextArea } = Input;

const mapPropsToFields = (props) => {
  if (!props.postSelected) return {};
  return {
    title: Form.createFormField({
      ...props.title,
      value: props.postSelected.title,
    }),
    body: Form.createFormField({
      ...props.body,
      value: props.postSelected.body,
    }),
  };
};

const settings = {
  mapPropsToFields,
};


const ModalEditForm = Form.create(settings)(
  class extends Component {
    state = {
      showModal: false,
    }

    componentWillReceiveProps = (nextProps) => {
      const { postSelected } = nextProps
      this.setState({
        showModal: postSelected !== undefined,
      });
    }

    handleCancel = (e) => {
      e.preventDefault();
      this.props.resetPost();      
    }

    handleSubmit = (e) => {
      const { form, postSelected } = this.props;
      form.validateFields((err, values) => {
        if (err) {
          return;
        }
        const { title, body } = values;
        const { id } = postSelected;
        console.log(id, title, body);
        
        this.props.editPost(id, title, body);
        form.resetFields();
        this.handleCancel(e);
      });
    }
    
    render(){
      const {
        getFieldDecorator,
        onCancel,
      } = this.props.form;
      return (
        <Modal
          visible={this.state.showModal}
          title="EDIT POST"
          okText="Save"
          onCancel={this.handleCancel}
          onOk={this.handleSubmit}
        >
          <Form>
            <FormItem label="Title">
              {getFieldDecorator('title', {
                rules: [{ required: true, message: 'Please input the title' }],
              })(<Input />)}
            </FormItem>
            <FormItem label="Body">
              {getFieldDecorator('body', {
                rules: [{ required: true, message: 'Please input an awesome content :)' }],
              })(<TextArea rows={4} />)}
            </FormItem>
          </Form>
        </Modal>
      );
    }
  }
);

const mapStateToProps = state => ({
  postSelected: state.Home.scenes.Post.postSelected,
});

const mapDispatchToProps = dispatch => ({
  resetPost: () => dispatch(resetPost()),
  editPost: (id, title, body) => dispatch(editPost(id, title, body)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditForm);
