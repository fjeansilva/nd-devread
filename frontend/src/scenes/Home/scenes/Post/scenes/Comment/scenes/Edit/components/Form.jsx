import React, { Component } from 'react';
import { Form, Input, Button, Select } from 'antd';

const FormItem = Form.Item;
const { TextArea } = Input;

class EditCommentFormContainer extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
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

export default Form.create()(EditCommentFormContainer);
