import React, { Component } from 'react';
import { Form, Input, Select, Modal } from 'antd';
import { connect } from 'react-redux';

const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;

const renderCategories = (listCategories) => {
  if (Object.keys(listCategories).length === 0) {
    return;
  }

  const categories = Object.values(listCategories);

  return categories.map(c => <Option key={c.path} value={c.path}>{c.name}</Option>);
};

class CreateFormContainer extends Component {
  render() {
    const { visible, onCancel, onCreate, form, categories } = this.props;
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
                {renderCategories(categories)}
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

const mapStateToProps = state => ({
  categories: state.Home.scenes.Post.data.categories,
});

export default Form.create()(connect(mapStateToProps)(CreateFormContainer));
