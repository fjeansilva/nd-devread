import React, { Component } from 'react';
import { Form, Input, Select, Modal } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;

class CreateFormContainer extends Component {
  render() {
    const { visible, onCancel, onCreate, form } = this.props;
    const { getFieldDecorator } = form;

    return (
      <Modal
        visible={visible}
        title="CREATE  POST"
        okText="Save"
        onCancel={onCancel}
        onOk={onCreate}
      >
        <Form>
          <FormItem label="Title">
            {getFieldDecorator('title', {
              rules: [{ required: true, message: 'Please input the title' }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem label="Category">
            {getFieldDecorator('category', {
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
        </Form>
      </Modal>
    )
  }
}

export default Form.create()(CreateFormContainer);
