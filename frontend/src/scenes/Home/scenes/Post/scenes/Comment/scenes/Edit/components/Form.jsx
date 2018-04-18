import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { editComment } from '../../../../../data/comments/actions';

const FormItem = Form.Item;
const { TextArea } = Input;

const mapPropsToFields = (props) => {
  if (!props.comment) return {};
  return {
    body: Form.createFormField({
      ...props.body,
      value: props.comment.body,
    }),
  };
};

const settings = {
  mapPropsToFields,
};

const EditCommentFormContainer = Form.create(settings)(
  class extends Component {
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          const { body } = values;
          this.props.editComment(this.props.comment.id, body);
          this.props.form.resetFields();
        }
      });
    }
  
    render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <Form onSubmit={this.handleSubmit}>
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
);

const mapDispatchToProps = dispatch => ({
  editComment: (id, body) => dispatch(editComment(id, body)),
});

export default connect(null, mapDispatchToProps)(EditCommentFormContainer);
