import React, { Component } from 'react';
import { Form, Input, Button, Select } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;

class EditFormContainer extends Component {
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
        <FormItem label="Title">
          {getFieldDecorator('title', {
            rules: [{ required: true, message: 'Please input the title' }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem label="Category">
          {getFieldDecorator('catery', {
            rules: [{ required: true, message: 'Please select a category' }],
          })(
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select a category"
              optionFilterProp="children"
              filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
              <Option value="react">React</Option>
              <Option value="redux">Redux</Option>
              <Option value="react-native">React Native</Option>
              <Option value="javascript">JavaScript</Option>
              <Option value="udacity">Udacity</Option>
            </Select>
          )}
        </FormItem>
        <FormItem label="Body">
          {getFieldDecorator('body', {
            rules: [{ required: true, message: 'Please input an awesome content :)' }],
          })(
            <TextArea rows={4} />
          )}
        </FormItem>
        <FormItem label="Author">
          {getFieldDecorator('author', {
            rules: [{ required: true, message: 'Please input your name' }],
          })(
            <Input />
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

export default Form.create()(EditFormContainer);