import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../../../../../data/comments/actions';
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;
const { TextArea } = Input;

class CreateCommentFormContainer extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {

        const { author, body } = values;
        const parentId = this.props.postId;

        const comment = {
          author,
          body,
          parentId,
        };

        this.props.addComment(comment);
        this.props.form.resetFields();
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem label="Author">
          {getFieldDecorator('author', {
            rules: [{ required: true, message: 'Please input your name' }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem label="Body">
          {getFieldDecorator('body', {
            rules: [{ required: true, message: 'Please input an awesome content :)' }],
          })(
            <TextArea rows={4} />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Save
          </Button>
        </FormItem>
      </Form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addComment: comment => dispatch(addComment(comment)),
})

export default Form.create()(connect(null, mapDispatchToProps)(CreateCommentFormContainer));
